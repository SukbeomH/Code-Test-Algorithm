class Hash {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) return undefined;

    for (let i = 0; i < this.keyMap[index].length; i++) {
      let [currentKey, currentValue] = this.keyMap[index][i];

      if (currentKey === key) return currentValue;
    }
  }
}