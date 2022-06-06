import { IMessageToken } from "../../without-dip/interfaces/message";

export class Whatsapp implements IMessageToken {
  send(): void {
    console.log('Whatsapp sended...')
  }
}