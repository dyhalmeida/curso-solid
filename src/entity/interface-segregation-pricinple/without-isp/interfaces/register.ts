import { Log } from "../components/log"
import { Notification } from "../components/notification"

export interface IRegister {
  save(): void
  registerLog(log: Log): void
  sendNotification(notification: Notification): void
}