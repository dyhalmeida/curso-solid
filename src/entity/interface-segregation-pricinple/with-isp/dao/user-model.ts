import { Log } from "../components/log";
import { Notification } from "../components/notification";
import { Database } from "../database/database";
import { ILog } from "../interfaces/log";
import { INotification } from "../interfaces/notification";
import { IRegister } from "../interfaces/register";

export class UserModel extends Database implements IRegister, ILog, INotification {

  save(): void {
    
  }

  registerLog(log: Log): void {
    
  }

  sendNotification(notification: Notification): void {
    
  }
  
}