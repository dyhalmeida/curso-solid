import { Log } from "./without-isp/components/log";
import { Notification } from "./without-isp/components/notification";
import { ContractModel } from "./without-isp/dao/contract-model";
import { LeadModel } from "./without-isp/dao/lead-model";
import { UserModel } from "./without-isp/dao/user-model";

import { Log as Log2 } from "./with-isp/components/log";
import { Notification as Notification2 } from "./with-isp/components/notification";
import { ContractModel as ContractModel2 } from "./with-isp/dao/contract-model";
import { LeadModel as LeadModel2 } from "./with-isp/dao/lead-model";
import { UserModel as UserModel2 } from "./with-isp/dao/user-model";

/**
 * O ISP afirma que nenhum cliente deve ser forçados a depender de métodos que não utiliza.
 * ISP divide interfaces que são muito grandes em menores e mais específicas, 
 * para que os clientes só necessitem saber sobre os métodos que são de interesse para eles.
 */


export const mainWithoutISP = async () => {

  const contractModel = new ContractModel()
  let rs = await contractModel.connect()
  console.log('contractModel', rs)
  contractModel.save()
  
  const leadModel = new LeadModel()
  rs = await leadModel.connect()
  console.log('leadModel', rs)
  leadModel.save()
  leadModel.sendNotification(new Notification())
  
  const userModel = new UserModel()
  rs = await userModel.connect()
  console.log('userModel', rs)
  userModel.save()
  userModel.registerLog(new Log())
  userModel.sendNotification(new Notification())

}

export const mainWithISP = async () => {

  const contractModel = new ContractModel2()
  let rs = await contractModel.connect()
  console.log('contractModel', rs)
  contractModel.save()
  
  const leadModel = new LeadModel2()
  rs = await leadModel.connect()
  console.log('leadModel', rs)
  leadModel.save()
  leadModel.sendNotification(new Notification2())
  
  const userModel = new UserModel2()
  rs = await userModel.connect()
  console.log('userModel', rs)
  userModel.save()
  userModel.registerLog(new Log2())
  userModel.sendNotification(new Notification2())

}