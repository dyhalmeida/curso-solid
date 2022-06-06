import { Read as ReadWihoutOCP } from './without-ocp/read'
import { Read as ReadWithOCP } from './with-ocp/read'


export const mainWithoutOCP = () => {

  const read = new ReadWihoutOCP()
  read.setDirectory(__dirname)
  read.setFile('dados.csv')
  const dataCSV  = read.readFile()

  read.setFile('dados.txt')
  const dataTXT = read.readFile()

  const data = [...dataCSV, ...dataTXT]
  console.table(data)

}

export const mainWithOCP = async () => {

  const read = new ReadWithOCP()
  read.setDirectory(__dirname)
  read.setFile('dados.csv')
  const dataCSV  = await read.readFile()

  read.setFile('dados.txt')
  const dataTXT = await read.readFile()

  const data = [...dataCSV, ...dataTXT]
  console.table(data)

}
