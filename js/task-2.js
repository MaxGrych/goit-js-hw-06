class Storage {
  // додається приватна властивість
  #items;

  constructor(items) {
    this.#items = items;
  }

  // певертає масив товарів
  getItems() {
    return this.#items;
  }

  // додає товар до масиву
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  // видаляє товар з масиву створенням нового масиву в якому немає itemToRemove
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
