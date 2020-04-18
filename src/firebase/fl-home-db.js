import FlamelinkDB from './flamelink-db'

export default class FLHome extends FlamelinkDB {
  constructor() {
    super('fl_content', 'production', 'en-US', 'home')
  }

  // Here you can extend UserDB with custom methods
}
