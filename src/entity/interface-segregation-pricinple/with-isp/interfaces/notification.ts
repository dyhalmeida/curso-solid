import { Notification } from "../components/notification";

export interface INotification {
  sendNotification(notification: Notification): void
}