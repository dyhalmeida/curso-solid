export class Rectangle {
  protected width: number = 0
  protected height: number = 0

  public getWidth(): number {
    return this.width
  }

  public setWidth(width: number): void {
    this.width = width
  }

  public getHeight(): number {
    return this.height
  }

  public setHeight(height: number): void {
    this.height = height
  }

  public getArea(): number {
    return this.getHeight() * this.getWidth()
  }

}