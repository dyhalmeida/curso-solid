// import { ShoppingCart } from './shopping-cart'
import { Item } from './item'
import { Order } from './order'
import { EmailService } from './email-service'

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