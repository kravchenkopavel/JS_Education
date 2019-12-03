/**
 * Created by pavlo.kravchenko on 11/19/2019.
 */

function getStringFromUser(inviteMessage) {
    let input = prompt(inviteMessage);
    while (input == null) {
        alert(inviteMessage);
        input = prompt(inviteMessage);
    }
    return input;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNumberFromUser(inviteMessage) {
    let input = prompt(inviteMessage);
    while (!isNumeric(input)){
        alert(inviteMessage);
        input = prompt(inviteMessage);
    }
    return +input;
}

function addGoodToArray(nameGood, priceGood, categoryGood) {
    let good = {
        name: nameGood,
        price: priceGood,
        category: categoryGood
    }
    goods.push(good);
    return goods;
}

function removeGoodFromArrayByName(nameGood) {
    for( i=0; i<goods.length; i++){
        if(goods[i].name === nameGood) {
            goods.splice(i, 1);
            i--;
        }
    }
    return goods;
}

function getGoodsByPrice(minPrice, maxPrice) {
    let sortedGoods = [];
    for (let i=0; i<goods.length; i++){
        let good = goods[i];
        let price = good.price;
        if (price >= minPrice && price <= maxPrice)
            sortedGoods.push(good);
    }
    return sortedGoods;
}

function getGoodsByCategory(category) {
    let sortedGoods = [];
    for (let i=0; i<goods.length; i++){
        let good = goods[i];
        let categoryG = good.category;
        if (categoryG === category)
            sortedGoods.push(good);
    }
    return sortedGoods;
}

function getQuantityGoodsByCategory(category) {
    return getGoodsByCategory(category).length;
}

function sortGoodsByPrice(inputArr, isAscending) {
    let newArray = inputArr.slice();
    if(isAscending) {
        return newArray.sort( (a, b) => a.price - b.price);
    }
    else {
        return newArray.sort( (a, b) => b.price - a.price);
    }
}

function getFilteredSortedArray(isAscending, ...args) {
    let newArrayGoods = [];
    if (args.length == 1) {
        newArrayGoods = getGoodsByCategory(args[0]);
    }
    if (args.length == 2) {
        newArrayGoods = getGoodsByPrice(args[0], args[1]);
    }
    return sortGoodsByPrice(newArrayGoods, isAscending);
}

function getTotalPriceByFilter(...args) {
    let newArrayGoods = [];
    if (args.length == 1) {
        newArrayGoods = getGoodsByCategory(args[0]);
    }
    if (args.length == 2) {
        newArrayGoods = getGoodsByPrice(args[0], args[1]);
    }
    return newArrayGoods.reduce((sum, item) => sum + item.price, 0);
}

let a = {
    name: 'aaa',
    price: 2,
    category: 'aaa'
}

let b = {
    name: 'bbb',
    price: 5,
    category: 'bbb'
}

let c = {
    name: 'ccc',
    price: 10,
    category: 'ccc'
}

let goods = [a, b, c];

addGoodToArray('ddd', 1, 'ddd');
addGoodToArray('bbb', 1, 'aaa');
addGoodToArray('bbb', 3, 'bbb');
addGoodToArray('aaa', 16, 'www');

console.log(getGoodsByPrice(goods, 1, 20));