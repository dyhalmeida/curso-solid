export class Messenger {

  private channel: string = ''

  public setChannel(channel: 'email' | 'sms') : void {
    this.channel =  channel
  }

  public getChannel(): string {
    return this.channel
  }

  public async sendToken() {
    const className = await import(`./components/${this.getChannel()}`)
    const instance = new className[this.getChannel()[0].toUpperCase() + this.getChannel().slice(1)]
    instance.send()
  }

}