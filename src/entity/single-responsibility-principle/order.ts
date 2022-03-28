import { ShoppingCart } from "./shopping-cart";

export class Order {

  constructor(
    private _status: string = 'open', 
    private _shoopingCart: ShoppingCart = new ShoppingCart(),
    private _amount: number = 0) {}

    get status(): string {
      return this._status
    }

    set status(value: string) {
      this._status = value
    }

    get shoopingCart(): ShoppingCart {
      return this._shoopingCart
    }

    get amount(): number {
      return this._amount
    }

    set amount(value: number) {
      this._amount = value
    }

    public close(): boolean {
      if (this.shoopingCart.isValid()) {
        this.status = 'closed'
        return true
      }
      return false
    }

}