import { Order } from './entity/single-responsibility-principle/order'
import { Item } from './entity/single-responsibility-principle/item'
import { EmailService } from './entity/single-responsibility-principle/email-service'

const item1 = new Item()
item1.name = 'Camisa 01'
item1.value = 33.90

const item2 = new Item()
item2.name = 'Camisa 02'
item2.value = 35.99

const order = new Order()

order.shoopingCart.addItem(item1)
order.shoopingCart.addItem(item2)

console.log(order)
console.log(order.shoopingCart.getItens())
const amount = order.shoopingCart.getItens().reduce((acc, item) => {
  acc += item.value
  return acc
}, 0)

console.log('Order amount: ',amount)
console.log('Cart is valid? ', order.shoopingCart.isValid())
console.log('Order status: ', order.status)

if (order.close()) {
  console.log('Order OK...')
  EmailService.send()
}