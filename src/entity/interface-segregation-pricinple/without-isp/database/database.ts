export class Database {

  private conection = ''

  public connect(): Promise<string> {
    this.conection = 'conected..'
    return Promise.resolve(this.conection)
  }

}