import { File } from "./file";
import { readFileSync } from 'fs'

export class Txt extends File {

   public readFile(path: string) {
    try {
      const data = readFileSync(path, 'utf-8')
      data.split(/\r?\n/).forEach(item => {
        this.setData({
          cpf: item.substring(11, 41).trim(),
          name: item.substring(0, 11).trim(),
          email: item.substring(41).trim()
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

}