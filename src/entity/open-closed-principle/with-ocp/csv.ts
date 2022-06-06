import { File } from "./file";
import { readFileSync } from 'fs'

export class Csv extends File {

  public readFile(path: string) {
    try {
      const data = readFileSync(path, 'utf-8')
      data.split(/\r?\n/).forEach(item => {
        const split = item.split(';')
        if (split.length && !split.includes('')) {
          this.setData({
            cpf: split[0],
            name: split[1],
            email: split[2]
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

}