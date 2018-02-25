class Sorter {
  constructor() {
      this.array = [];

      this.comparator=function (a,b) {return(a-b)

      }

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
      indices.sort();
      console.log (`indic sorted`+indices);

      console.log (`arr before`+this.array);
      let arr=[];
    for (let i=0; i<indices.length; i++) {

        arr.push(this.array[indices[i]]);
    }
      console.log (`arr before`+arr);

    arr.sort(this.comparator);

    console.log (`arr after`+arr);

      for (let j=0; j<arr.length; j++) {
        this.array[indices[j]]=arr[j];

    }
      console.log (`arr total after`+this.array);
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;

  }
}

module.exports = Sorter;