import { File } from './file'
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

  public readFile() {
    const path = join(this.getDirectory(), this.getFile())
    const file = new File()

    
    if (this.getFile().includes('csv')) {
      file.readFileCSV(path)
    }

    if (this.getFile().includes('txt')) {
      file.readFileTxt(path)
    }

    return file.getData()
  }
}