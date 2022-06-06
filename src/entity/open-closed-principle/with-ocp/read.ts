import { join } from 'path'

export class Read {
  constructor(
    private directory: string = '',
    private file: string = ''
  ) {}

  public getDirectory(): string {
    return this.directory
  }

  public getFile(): string {
    return this.file
  }

  public setDirectory(directory: string): void {
    this.directory = directory
  }

  public setFile(file: string): void {
    this.file = file
  }

  public async readFile() {
    
    const path = join(this.getDirectory(), this.getFile())
    let [, extension] = this.getFile().split('.')

    const classExtensionFirstCharUppercase = extension[0].toUpperCase() + extension.slice(1)
    const className = await import(`./${extension}`)
    const instance = new className[classExtensionFirstCharUppercase]()
    instance.readFile(path)
    return instance.getData()
    
  }
}