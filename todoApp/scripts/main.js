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
        this.cardHTMLObj = {
            cardBody: null,
            badgeImportance: null,
            badgeStatus: null,
            cardTitle: null,
            cardText: null,
            btnCompleteReopen: null,
            btnEdit: null,
            btnDelete: null,
            closeDiv: null
        };
        this.init();
    }

    init() {
        this.createCard(this.cardData);
        this.attachEvents();
    }

    createCard() {
        this.card.classList.add('card');

        this.cardHTMLObj = {
            cardBody: "<div class=\"card-body\">",
            badgeImportance: "<span class=\"badge " + this.importanceClass + "\">" + this.cardData.importance + "</span>",
            badgeStatus: "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>",
            cardTitle: "<h5 class=\"card-title\">" + this.cardData.title + "</h5>",
            cardText: "<p class=\"card-text\">" + this.cardData.description + "</p>",
            btnCompleteReopen: "<a href=\"#\" class=\"btn " + this.statusClass.classNameButton + "\">" + this.statusClass.textButton + "</a>",
            btnEdit: "<a href=\"#\" class=\"btn btn-info edit-button\">Edit</a>",
            btnDelete: "<a href=\"#\" class=\"btn btn-danger delete-button\">Delete</a>",
            closeDiv: "</div>"
        };

        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');
        this.cardsBlock.appendChild(this.card);
    }

    get importanceClass() {
        switch (this.cardData.importance) {
            case "High":
                return "badge-danger";
            case "Medium":
                return "badge-warning";
            default:
                return "badge-success";
        }
    }

    get statusClass() {
        let obj = {
            classNameBadge: "",
            classNameButton: "",
            textButton: ""
        };

        switch (this.cardData.status) {
            case 'Completed':
                obj.classNameBadge = 'badge-secondary';
                obj.classNameButton = 'btn-warning reopen-button';
                obj.textButton = 'Reopen';
                return obj;
            case 'Reopened':
                obj.classNameBadge = 'badge-warning';
                obj.classNameButton = 'btn-primary complete-button';
                obj.textButton = 'Complete';
                return obj;
            case 'New':
                obj.classNameBadge = 'badge-light';
                obj.classNameButton = 'btn-primary complete-button';
                obj.textButton = 'Complete';
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
        if (completeButton) {
            completeButton.addEventListener('click', event => {
                event.preventDefault();
                this.completeCard();
            });
        }

        let reopenButton =  this.card.querySelector('.reopen-button');
        if (reopenButton) {
            reopenButton.addEventListener('click', event => {
                event.preventDefault();
                this.reopenCard();
            });
        }
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

        this.cardHTMLObj.badgeStatus = "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>",
        this.cardHTMLObj.btnCompleteReopen = "<a href=\"#\" class=\"btn " + this.statusClass.classNameButton + "\">" + this.statusClass.textButton + "</a>";
        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');

        this.attachEvents();
    }

    reopenCard() {
        this.cardData.status = 'Reopened';

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardHTMLObj.badgeStatus = "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>",
        this.cardHTMLObj.btnCompleteReopen = "<a href=\"#\" class=\"btn " + this.statusClass.classNameButton + "\">" + this.statusClass.textButton + "</a>";
        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');

        this.attachEvents();
    }
}

let appElement = document.querySelector('#app');

let app = new App(appElement);