export class File {

  private data: Array<Array<string>> = []

  public setData({ cpf, name, email}: { cpf: string, name: string, email: string }) {
    this.data.push([
      cpf,
      name,
      email
    ])
  }

  public getData() {
    return this.data
  }
}
