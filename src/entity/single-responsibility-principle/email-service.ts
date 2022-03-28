type Config = {
  from: string
  to: string
  content: string
}
export class EmailService {
  constructor(private config: Config = {
      from: 'email@email.com',
      to: '',
      content: ''
  }) {}

  public static send() {
    console.log('Sended...')
  }

}