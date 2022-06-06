export class Polygon {
  private form: any

  public setForm(form: any): void {
    this.form = form
  }

  public getForm(): any {
    return this.form
  }

  public getArea(): number {
    return this.getForm()?.getHeight() * this.getForm()?.getWidth()
  }
}