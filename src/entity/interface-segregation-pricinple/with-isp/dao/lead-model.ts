import { Database } from "../database/database";
import { Notification } from "../components/notification";
import { INotification } from "../interfaces/notification";
import { IRegister } from "../interfaces/register";

export class LeadModel extends Database implements INotification, IRegister {

  sendNotification(notification: Notification): void {
    
  }

  save(): void {
    
  }
 
}