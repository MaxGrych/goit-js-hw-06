class StringBuilder {
  #value;

  // присвоює початкове значення
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // повертає значення
  getValue() {
    return this.#value;
  }

  // додає рядок в кінець
  padEnd(str) {
    this.#value += str;
  }

  // додає рядок на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // додає рядок спочатку на початок а потім на кінець
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
