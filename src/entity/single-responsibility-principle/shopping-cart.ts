import { Item } from "./item"

export class ShoppingCart {
  
  constructor(private itens: Array<Item> = []) {}

  public getItens(): Item[] {
    return this.itens
  }

  public addItem(item: Item): void {
    this.itens.push(item)
  }

  public isValid(): boolean {
    return !!this.itens.length
  }
  
}