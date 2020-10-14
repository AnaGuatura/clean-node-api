import { AccountModel, AddAccount, Encrypter } from './db-add-accoint-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
