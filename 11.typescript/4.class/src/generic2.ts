class Box<T> {
  // private contents: T;

  // constructor(value: T) {
  //   this.contents = value;
  // }

  constructor(private contents: T) {}

  getContent(): T {
    return this.contents;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent());
