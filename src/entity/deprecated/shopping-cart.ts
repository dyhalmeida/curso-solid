export class ShoppingCart {

  constructor(private itens: Array<{ item?: string, itemValue?: number }> = [{}], private status: string = 'open', private amount: number = 0){
    this.calculate()
  }

  public toString() {
    console.log(this)
    return this
  }

  public showItens() {
    console.log(this.itens.toString())
    return this

  }

  public addItem(item: string, itemValue: number) {
    this.itens.push({
      item,
      itemValue
    })
    return this
  }

  public calculate() {
    this.amount = this.itens.reduce((acc, obj) => {
      acc += obj.itemValue ?? 0
      return acc
    }, 0)
    return this
  }

}