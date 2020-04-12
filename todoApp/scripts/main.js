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
                    importance: this.importanceSelect.value,
                    status: 'New'
                };

                new Card(cardData);
                this.clearForm();

                this.cardsArray.push(cardData);
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

    init() {
        this.createCard(this.cardData);
        this.attachEvents();
    }

    createCard(cardData) {
        this.card.classList.add('card');

        let cardHTML = `<div class="card-body">
                        <span class="badge ${this.importanceClass}">${cardData.importance}</span>
                        <span class="badge ${this.statusClass.className} status">${cardData.status}</span>
                        <h5 class="card-title">${cardData.title}</h5>
                        <p class="card-text">${cardData.description}</p>
                        <a href="#" class="btn btn-primary complete-button ${this.statusClass.buttonDisable}">Complete</a>
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

    get statusClass() {
        let obj = {
            className: "",
            buttonDisable: ""
        };

        switch (this.cardData.status) {
            case 'Completed':
                obj.className = 'badge-secondary';
                obj.buttonDisable = 'disabled';
                return obj;
            default:
                obj.className = 'badge-light';
                obj.buttonDisable = 'enabled';
                return obj;
        }
    }

    attachEvents() {
        let deleteButton =  this.card.querySelector('.delete-button');
        deleteButton.addEventListener('click', event => {
            event.preventDefault();
            this.deleteCard();
        });

        let completeButton =  this.card.querySelector('.complete-button');
        completeButton.addEventListener('click', event => {
            event.preventDefault();
            this.completeCard();
        });
    }

    deleteCard() {
        let cardIndex = app.cardsArray.indexOf(this.cardData);
        app.cardsArray.splice(cardIndex, 1);

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardsBlock.removeChild(this.card);
    }

    completeCard() {
        this.cardData.status = 'Completed';

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.card.innerHTML = this.card.innerHTML.replace('<span class="badge badge-light status">New</span>', '<span class="badge badge-secondary status">Completed</span>');
        this.card.innerHTML = this.card.innerHTML.replace('class="btn btn-primary complete-button"', 'class="btn btn-primary complete-button disabled"');
    }
}

let appElement = document.querySelector('#app');

let app = new App(appElement);