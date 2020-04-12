/**
 * Created by Pavel on 12.04.2020.
 */
'use strict';

class App {
    constructor(element) {
        this.element = element;
        this.titleInput = this.element.querySelector('#titleInput');
        this.descriptionInput = this.element.querySelector('#descriptionInput');
        this.importanceSelect = this.element.querySelector('#importanceSelect');
        this.cardsArray = [];
        this.init();
    }

    init() {
        this.attachEvents();
        this.checkStorage();
    }

    attachEvents() {
        createButton.addEventListener('click',
            event => {
                event.preventDefault();

                let createButton = this.element.querySelector('#createButton');

                let cardData = {
                    title: this.titleInput.value,
                    description: this.descriptionInput.value,
                    importance: this.importanceSelect.value
                };

                new Card(cardData);
                this.clearForm();

                let tempCardData = cardData;
                tempCardData.status = false;
                this.cardsArray.push(tempCardData);
                this.addCardToStorage();
            });
    }

    checkStorage() {
        let storageData = localStorage.getItem('todoCards');
        if (storageData) {
            this.cardsArray = JSON.parse(storageData);
            this.cardsArray.forEach(cardData => {
                if (cardData) {
                    new Card(cardData);
                }

            });
        }
    }

    addCardToStorage() {
        let stringifyCardsArray = JSON.stringify(this.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);
    }

    clearForm() {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.importanceSelect.value = 'Low';
    }

}

class Card {
    constructor(cardData) {
        this.cardData = cardData;
        this.cardsBlock = document.querySelector('#cardsBlock');
        this.card = document.createElement('div');
        this.init();
    }

    attachEvents() {
        let deleteButton =  this.card.querySelector('.delete-button');
        deleteButton.addEventListener('click', event => {
            event.preventDefault();

        this.deleteCard();
        });
    }

    deleteCard() {
        let cardIndex = app.cardsArray.indexOf(this.cardData);
        delete app.cardsArray[cardIndex];

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardsBlock.removeChild(this.card);
    }

    init() {
        this.createCard(this.cardData);
        this.attachEvents();
    }

    createCard(cardData) {
        this.card.classList.add('card');

        let cardHTML = `<div class="card-body">
                        <span class="badge ${this.importanceClass}">${cardData.importance}</span>
                        <h5 class="card-title">${cardData.title}</h5>
                        <p class="card-text">${cardData.description}</p>
                        <a href="#" class="btn btn-primary complete-button">Complete</a>
                        <a href="#" class="btn btn-info edit-button">Edit</a>
                        <a href="#" class="btn btn-danger delete-button">Delete</a>
                        </div>`;

        this.card.innerHTML = cardHTML;
        this.cardsBlock.appendChild(this.card);
    }

    get importanceClass() {
        switch (this.cardData.importance) {
            case 'High':
                return 'badge-danger';
            case 'Medium':
                return 'badge-warning';
            default:
                return 'badge-success';
        }


    }
}

let appElement = document.querySelector('#app');

let app = new App(appElement);