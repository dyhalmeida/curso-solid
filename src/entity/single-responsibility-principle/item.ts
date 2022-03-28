export class Item {
  constructor(private _name: string = '', private _value: number = 0) {}

  get name(): string {
    return this.name
  }

  set name(value: string) {
    this._name = value
  }

  get value(): number {
    return this._value
  }

  set value(value: number) {
    this._value = value
  }

  public isValid(): boolean {
    if (!this._name) return false
    if (this._value <= 0) return false
    return true
  }

}