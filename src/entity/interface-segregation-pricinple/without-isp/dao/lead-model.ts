import { Log } from "../components/log";
import { Notification } from "../components/notification";
import { Database } from "../database/database";
import { IRegister } from "../interfaces/register";

export class LeadModel extends Database implements IRegister {

  save(): void {
    
  }

  registerLog(log: Log): void {
    
  }

  sendNotification(notification: Notification): void {
    
  }
  
}