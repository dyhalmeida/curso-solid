import { Polygon } from "./with-lsp/polygon"
import { Rectangle } from "./without-lsp/rectangle"
import { Square } from "./without-lsp/square"

/**
 * O príncipio de substituição de liskov diz que uma classe
 * filha, pode ser utilizada no lugar da classe pai, sem que ocorra
 * qualquer erro ou efeito colateral.
 * 
 * Não se pode quebrar o comportamento da classe pai em sua cadeia de classes filhas
 */
export const mainWithoutLSP = () => {

  let rectangle = new Rectangle()
  rectangle.setHeight(10)
  rectangle.setWidth(20)
  console.log('A área do retângulo é: ', rectangle.getArea())

  const square = new Square()
  square.setHeight(5)
  square.setWidth(2)
  console.log('A área do quadrado é: ', square.getArea())


  /**
   * LSP não atendido
   */
  rectangle = new Square()
  rectangle.setHeight(10)
  rectangle.setWidth(20)
  console.log('A área do retângulo é: ', rectangle.getArea())

}

export const mainWithLSP = () => {
  let polygon = new Polygon()
  polygon.setForm(new Rectangle())
  polygon.getForm().setHeight(10)
  polygon.getForm().setWidth(20)
  console.log('A área do retângulo é: ', polygon.getArea())

  polygon.setForm(new Square())
  polygon.getForm().setHeight(10)
  polygon.getForm().setWidth(20)
  console.log('A área do quadrado é: ', polygon.getArea())
}