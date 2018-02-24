class Sorter {
  constructor() {
      this.array = [];

  }

  add(element) {
      this.array.push(element);
  }

  at(index) {
      return this.array[index];
  }

  get length() {
      return this.array.length;
  }

  toArray() {
      return this.array;
  }

  sort(indices) {
      console.log (`indic`+indices);

      console.log (`abefore`+this.array);
      let arr=[];
    for (let i=0; i<indices.length; i++) {

        arr.push(this.array[indices[i]]);
    }
      console.log (`ibefore`+arr);

    arr.sort(this.comparator);

    console.log (`iafter`+arr);

      for (let j=0; j<arr.length; j++) {
        this.array[indices[j]]=arr[j];

    }
      console.log (`aafter`+this.array);
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;

  }
}

module.exports = Sorter;