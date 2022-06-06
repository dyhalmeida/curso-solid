export class Square {

  protected width: number = 0
  protected height: number = 0

  public setHeight(height: number): void {
    this.height = height
    this.width = height
  }

  public getHeight(): number {
    return this.height
  }

  public setWidth(width: number): void {
    this.width = width
    this.height = width
  }

  public getWidth(): number {
    return this.width
  }

}