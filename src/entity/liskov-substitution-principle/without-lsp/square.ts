import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
  public setHeight(height: number): void {
    this.height = height
    this.width = height
  }

  public setWidth(width: number): void {
    this.width = width
    this.height = width
  }
}