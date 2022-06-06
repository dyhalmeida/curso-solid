import { IMessageToken } from "../interfaces/message";

export class Sms implements IMessageToken {

  send(): void {
    console.log('SMS sended...')
  }

}