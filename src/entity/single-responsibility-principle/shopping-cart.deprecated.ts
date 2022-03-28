export class ShoppingCartDeprecated {

  constructor(
    private itens: Array<{ item?: string, itemValue?: number }> = [{}], 
    private status: string = 'open', 
    private amount: number = 0) {
    this.calculate()
  }

  public showMe() {
    console.log(this)
  }

  public showItens() {
    return this.itens.toString()
  }

  public addItem(item: string, itemValue: number) {
    this.itens.push({
      item,
      itemValue
    })
  }

  public calculate() {
    this.amount = this.itens.reduce((acc, obj) => {
      acc += obj.itemValue ?? 0
      return acc
    }, 0)
  }

  public closeOrder() {
    if (!this.isEmpty()) {
      this.status = 'closed'
      this.sendEmail()
    }
  }

  public isEmpty() {
    return !!this.itens.length
  }

  public showStatus() {
    console.log(this.status)
  }

  public sendEmail() {
    console.log('email sended...')
  }

}