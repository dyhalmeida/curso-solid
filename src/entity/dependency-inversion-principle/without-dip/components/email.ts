import { IMessageToken } from "../interfaces/message";

export class Email implements IMessageToken {

  send(): void {
    console.log('Email sended...')
  }

}