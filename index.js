class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    if(this.length <= pos + 1) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length){
      return this.items[this.length -1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length){
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((acc, num) => {
      return acc + num
    }, 0);

  }

  avg() {
    return this.sum()/this.length
  }
}

module.exports = SortedList;
