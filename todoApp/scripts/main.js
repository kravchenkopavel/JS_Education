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
        this.sortSelect = this.element.querySelector('#sortSelect');
        this.sortSelectGroup = this.element.querySelector('#sortSelectGroup');

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
                this.editedCard.updateCardUI();
                this.editedCard.attachEvents();
                this.addCardToStorage();
                this.clearForm();
                this.hideButton(app.editButton);
                this.hideButton(app.cancelButton);
                this.showButton(app.createButton);
                app.sortSelectGroup.style.display = 'block';
            });

        this.cancelButton.addEventListener('click',
            event => {
                event.preventDefault();
                this.clearForm();
                this.hideButton(app.editButton);
                this.hideButton(app.cancelButton);
                this.showButton(app.createButton);
                app.sortSelectGroup.style.display = 'block';
            });

        this.sortSelect.addEventListener('change',
            event => {
                event.preventDefault();
                this.sortCards();
                this.addCardToStorage();
                App.clearCardsBlock();
                this.checkStorage();
            });
    }

    sortCards() {
        let sortRule = this.sortSelect.value;

        this.cardsArray.sort(getRule(sortRule));

        function getRule(sortRule) {
            switch (sortRule) {
                case "Importance: from Low to High" :
                    return function (a, b) {
                        function getImportanceNumber(str) {
                            switch (str) {
                                case "Low" : return 0;
                                case "Medium" : return 1;
                                case "High" : return 2;
                            }
                        }
                        if (getImportanceNumber(a.cardData.importance) < getImportanceNumber(b.cardData.importance))
                            return -1;
                        if (getImportanceNumber(a.cardData.importance) > getImportanceNumber(b.cardData.importance))
                            return 1;
                        return 0;
                    };

                case "Importance: from High to Low" :
                    return function (a, b) {
                        function getImportanceNumber(str) {
                            switch (str) {
                                case "Low" : return 0;
                                case "Medium" : return 1;
                                case "High" : return 2;
                            }
                        }
                        if (getImportanceNumber(a.cardData.importance) > getImportanceNumber(b.cardData.importance))
                            return -1;
                        if (getImportanceNumber(a.cardData.importance) < getImportanceNumber(b.cardData.importance))
                            return 1;
                        return 0;
                    };

                case "Status: Completed first" :
                    return function (a, b) {
                        function getStatusNumber(str) {
                            switch (str) {
                                case "New" : return 1;
                                case "Completed" : return 0;
                                case "Reopened" : return 2;
                            }
                        }
                        if (getStatusNumber(a.cardData.status) < getStatusNumber(b.cardData.status))
                            return -1;
                        if (getStatusNumber(a.cardData.status) > getStatusNumber(b.cardData.status))
                            return 1;
                        return 0;
                    };

                case "Status: New first" :
                    return function (a, b) {
                        function getStatusNumber(str) {
                            switch (str) {
                                case "New" : return 0;
                                case "Completed" : return 2;
                                case "Reopened" : return 1;
                            }
                        }
                        if (getStatusNumber(a.cardData.status) < getStatusNumber(b.cardData.status))
                            return -1;
                        if (getStatusNumber(a.cardData.status) > getStatusNumber(b.cardData.status))
                            return 1;
                        return 0;
                    };

                case "Status: Reopened first" :
                    return function (a, b) {
                        function getStatusNumber(str) {
                            switch (str) {
                                case "New" : return 1;
                                case "Completed" : return 2;
                                case "Reopened" : return 0;
                            }
                        }
                        if (getStatusNumber(a.cardData.status) < getStatusNumber(b.cardData.status))
                            return -1;
                        if (getStatusNumber(a.cardData.status) > getStatusNumber(b.cardData.status))
                            return 1;
                        return 0;
                    };

                case "Title: from A to Z" :
                    return function (a, b) {
                        if (a.cardData.title.toLowerCase() < b.cardData.title.toLowerCase())
                            return -1;
                        if (a.cardData.title.toLowerCase() > b.cardData.title.toLowerCase())
                            return 1;
                        return 0;
                    };

                case "Title: from Z to A" :
                    return function (a, b) {
                        if (a.cardData.title.toLowerCase() > b.cardData.title.toLowerCase())
                            return -1;
                        if (a.cardData.title.toLowerCase() < b.cardData.title.toLowerCase())
                            return 1;
                        return 0;
                    };
            }
        }
    }

        static clearCardsBlock() {
        let block = document.querySelector('#cardsBlock');
        while (block.firstChild) {
            block.removeChild(block.firstChild);
        }
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
        this.cardUI = document.createElement('div');
        this.init();
    }

    init() {
        this.createCard();
        this.attachEvents();
    }

    createCard() {
        this.cardUI.classList.add('card');
        this.updateCardUI();
        this.cardsBlock.appendChild(this.cardUI);
    }

    updateCardUI() {
        this.cardUI.innerHTML = this.cardHTML;
    }

    get cardHTML() {
        let cardHTMLObj = {
            cardBody: "<div class=\"card-body\">",
            badgeImportance: "<span class=\"badge " + this.importanceClass + "\">" + this.cardData.importance + "</span>",
            badgeStatus: "<span class=\"badge " + this.statusClass.classNameBadge + " status\">" + this.cardData.status + "</span>",
            cardTitle: "<h5 class=\"card-title\">" + this.cardData.title + "</h5>",
            cardText: "<p class=\"card-text\">" + this.cardData.description + "</p>",
            btnComplete: "<a href=\"#\" class=\"btn btn-primary complete-button\" style=\"" + this.statusClass.completeButtonStyle + "\">Complete</a>",
            btnReopen: "<a href=\"#\" class=\"btn btn-warning reopen-button\" style=\"" + this.statusClass.reopenButtonStyle + "\">Reopen</a>",
            btnEdit: "<a href=\"#\" class=\"btn btn-info edit-button\">Edit</a>",
            btnDelete: "<a href=\"#\" class=\"btn btn-danger delete-button\">Delete</a>",
            closeDiv: "</div>"
        };
        return Object.values(cardHTMLObj).join('\n');
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
            completeButtonStyle: "",
            reopenButtonStyle: ""
        };

        switch (this.cardData.status) {
            case 'Completed':
                obj.classNameBadge = 'badge-secondary';
                obj.completeButtonStyle = 'display: none';
                obj.reopenButtonStyle = 'display: inline-block';
                return obj;
            case 'Reopened':
                obj.classNameBadge = 'badge-warning';
                obj.completeButtonStyle = 'display: inline-block';
                obj.reopenButtonStyle = 'display: none';
                return obj;
            case 'New':
                obj.classNameBadge = 'badge-light';
                obj.completeButtonStyle = 'display: inline-block';
                obj.reopenButtonStyle = 'display: none';
                return obj;
        }
    }

    attachEvents() {
        let deleteButton =  this.cardUI.querySelector('.delete-button');
        deleteButton.addEventListener('click', event => {
            event.preventDefault();
            this.deleteCard();
        });

        let completeButton =  this.cardUI.querySelector('.complete-button');
        completeButton.addEventListener('click', event => {
                event.preventDefault();
                this.completeCard();
        });

        let reopenButton =  this.cardUI.querySelector('.reopen-button');
        reopenButton.addEventListener('click', event => {
                event.preventDefault();
                this.reopenCard();
        });

        let editButton =  this.cardUI.querySelector('.edit-button');
        editButton.addEventListener('click', event => {
            event.preventDefault();
            this.editCard();
        });
    }

    completeCard() {
        this.cardData.status = 'Completed';
        this.updateCardUI();

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.attachEvents();
    }

    reopenCard() {
        this.cardData.status = 'Reopened';
        this.updateCardUI();

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.attachEvents();
    }

    editCard() {
        app.fillForm(this);
        app.hideButton(app.createButton);
        app.sortSelectGroup.style.display = 'none';
        app.showButton(app.editButton);
        app.showButton(app.cancelButton);
    }

    deleteCard() {
        let cardIndex = app.cardsArray.indexOf(this);
        app.cardsArray.splice(cardIndex, 1);

        let stringifyCardsArray = JSON.stringify(app.cardsArray);
        localStorage.setItem('todoCards', stringifyCardsArray);

        this.cardsBlock.removeChild(this.cardUI);
    }
}

let appElement = document.querySelector('#app');

let app = new App(appElement);

//todo: add data creation
//todo: add history modification card
//todo: add export to file