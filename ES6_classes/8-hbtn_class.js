export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Called when the object is cast to a Number
  valueOf() {
    return this._size;
  }

  // Called when the object is cast to a String
  toString() {
    return this._location;
  }
}
