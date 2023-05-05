class Product {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Book extends Product {
  author: string;

  constructor(name: string, author: string) {
    super(name);
    this.author = author;
  }
}

class Game extends Product {
  players: number;

  constructor(name: string, players: number) {
    super(name);
    this.players = players;
  }
}

function searchProduct(search: string) {
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
