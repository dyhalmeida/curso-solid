import { IMessageToken } from "../without-dip/interfaces/message"

export class Messenger {

  constructor(private channel: IMessageToken) {}

  public async sendToken() {
   this.channel.send()
  }

}