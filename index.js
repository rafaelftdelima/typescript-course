"use strict";
class Product {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Book extends Product {
    author;
    constructor(name, author) {
        super(name);
        this.author = author;
    }
}
class Game extends Product {
    players;
    constructor(name, players) {
        super(name);
        this.players = players;
    }
}
function searchProduct(search) {
    if (search === 'The Hobbit') {
        return new Book('The Hobbit', 'J. R. R. Tolkien');
    }
    if (search === 'Dark Souls') {
        return new Game('Dark Souls', 1);
    }
    return null;
}
const product = searchProduct('Dark Souls');
console.log(product);
