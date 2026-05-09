export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // This controls the [object SFO] output
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
