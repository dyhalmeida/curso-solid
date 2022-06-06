import { Messenger } from "./without-dip/messenger"
import { Messenger as Messeger2 } from "./with-dip/messenger"
import { Email } from "./with-dip/components/email"
import { Sms } from "./with-dip/components/sms"
import { Whatsapp } from "./with-dip/components/whatsapp"


/**
 * O DIP ou dependency inversion principle diz que módulos de alto nível
 * não devem depender de módulos de baixo nível, mas sim, ambos devem depender de abtrações.
 * Deve-se depender de uma abtração e não de uma implementação.
 * Já as abstrações não devem depender de detalhes, mas detalhes devem depender de abtrações.
 * 
 * No exemplo de código desse repo, o módulo de alto nível(Messeger) depende de módulos de baixo nível
 * como (Email, Sms), por tantp a classe Messeger está se comportando como cliente e está acomplada ao consumo de Email e SMS
 */
export const mainWithoutDSP = async () => {

  const msgOne = new Messenger()
  msgOne.setChannel('email')
  msgOne.sendToken()

  const msgTwo = new Messenger()
  msgTwo.setChannel('sms')
  msgTwo.sendToken()

}

export const mainWithDSP = async () => {

  const msgOne = new Messeger2(new Email())
  msgOne.sendToken()

  const msgTwo = new Messeger2(new Sms())
  msgTwo.sendToken()

  const msgThree = new Messeger2(new Whatsapp())
  msgThree.sendToken()


}