import GenericDB from './generic-db'

export default class ContactDB extends GenericDB {
  constructor() {
    super('vb_contacts')
  }

  // Here you can extend UserDB with custom methods
}
