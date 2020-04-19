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
        this.createButton = this.element.querySelector('#createButton');
        this.editButton = this.element.querySelector('#editButton');
        this.cancelButton = this.element.querySelector('#cancelButton');

        this.cardsArray = [];
        this.editedIndex = null;
        this.editedCard = null;
        this.init();
    }

    init() {
        this.attachEvents();
        this.checkStorage();
    }

    attachEvents() {
        this.createButton.addEventListener('click',
            event => {
                event.preventDefault();
                this.createCard();
            });

        this.editButton.addEventListener('click',
            event => {
                event.preventDefault();
                this.updateCardData();
                this.addCardToStorage();
                this.editedCard.card.innerHTML = Object.values(this.editedCard.cardHTML).join('\n');
                this.hideButton(app.editButton);
                this.hideButton(app.cancelButton);
                this.showButton(app.createButton);
            });
    }

    updateCardData() {
        this.editedCard.cardData.title = this.titleInput.value;
        this.editedCard.cardData.description = this.descriptionInput.value;
        this.editedCard.cardData.importance = this.importanceSelect.value;
        this.cardsArray[this.editedIndex] = this.editedCard;
    }

    createCard() {
        let cardData = {
            title: this.titleInput.value,
            description: this.descriptionInput.value,
            importance: this.importanceSelect.value,
            status: 'New'
        };

        this.cardsArray.push(new Card(cardData));
        this.clearForm();
        this.addCardToStorage();
    }

    hideButton(btn) {
        btn.style.display = "none";
    }

    showButton(btn) {
        btn.style.display = "inline-block";
    }

    checkStorage() {
        let storageData = localStorage.getItem('todoCards');
        if (storageData) {
            this.cardsArray = JSON.parse(storageData);
            this.cardsArray.forEach(card => {
                if (card.cardData) {
                    new Card(card.cardData);
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

    fillForm(card) {
        this.editedCard = card;
        this.editedIndex = this.cardsArray.indexOf(card);
        this.titleInput.value = card.cardData.title;
        this.descriptionInput.value = card.cardData.description;
        this.importanceSelect.value = card.cardData.importance;
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
        this.createCard();
        this.attachEvents();
    }

    createCard() {
        this.card.classList.add('card');
        this.cardHTML;
        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');
        this.cardsBlock.appendChild(this.card);
    }

    get cardHTML() {
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
        return this.cardHTMLObj;
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

        let editButton =  this.card.querySelector('.edit-button');
        editButton.addEventListener('click', event => {
            event.preventDefault();

            app.fillForm(this);
            app.hideButton(app.createButton);
            app.showButton(app.editButton);
            app.showButton(app.cancelButton);
        });

    }

    deleteCard() {
        let cardIndex = app.cardsArray.indexOf(this);
        app.cardsArray.splice(cardIndex, 1);

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardsBlock.removeChild(this.card);
    }

    completeCard() {
        this.cardData.status = 'Completed';

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardHTMLObj.badgeStatus = "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>";
        this.cardHTMLObj.btnCompleteReopen = "<a href=\"#\" class=\"btn " + this.statusClass.classNameButton + "\">" + this.statusClass.textButton + "</a>";
        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');

        this.attachEvents();
    }

    reopenCard() {
        this.cardData.status = 'Reopened';

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardHTMLObj.badgeStatus = "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>";
        this.cardHTMLObj.btnCompleteReopen = "<a href=\"#\" class=\"btn " + this.statusClass.classNameButton + "\">" + this.statusClass.textButton + "</a>";
        this.card.innerHTML = Object.values(this.cardHTMLObj).join('\n');

        this.attachEvents();
    }
}

let appElement = document.querySelector('#app');

let app = new App(appElement);

//todo: refactor card class
//todo: add cancel edit card
//todo: add sort cards
//todo: add data creation
//todo: add history modification card
//todo: add export to file