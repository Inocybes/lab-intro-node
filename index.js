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
    this.calc_length()
  }

  remove(item){
    if (this.length) {
      const indexFound = this.items.findIndex(element => element===item)
      if (indexFound>=0) {
        this.items.splice(indexFound, 1)
        this.calc_length()
      }
    } else { 
      throw new Error('OutOfBounds');
    }
  }

  calc_length() {
    this.length = this.items.length
  }

  get(pos) {
    if(this.length > pos) {
      console.log("returning pos")
      return this.items[pos]
    } else {
      console.log("error")
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
    if (this.length){
      return this.sum()/this.length
    }else{
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
