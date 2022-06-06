import { readFileSync } from 'fs'

export class File {

  private data: Array<Array<string>> = [] 

  public readFileCSV(path: string) {
    try {
      const data = readFileSync(path, 'utf-8')
      data.split(/\r?\n/).forEach(item => {
        const split = item.split(';')
        if (split.length && !split.includes('')) {
          this.data.push(split)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  public readFileTxt(path: string) {
    try {
      const data = readFileSync(path, 'utf-8')
      data.split(/\r?\n/).forEach(item => {
        this.data.push([
          item.substring(11, 41).trim(), // name
          item.substring(0, 11).trim(), // cpf
          item.substring(41).trim() // email
        ])
      })
    } catch (error) {
      console.error(error)
    }
  }

  public getData() {
    return this.data
  }
}

// https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js