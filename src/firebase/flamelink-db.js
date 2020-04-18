
import firestore from './async-firestore'

export default class GenericDB {
  constructor(collectionPath, collectionEnv, collectionLocale, collectionSection) {
    this.collectionPath = collectionPath
    this.collectionEnv = collectionEnv
    this.collectionLocale = collectionLocale
    this.collectionSection = collectionSection
  }

  /**
   * Read a document in the collection
   */
  async getContent() {
    const collectionRef = (await firestore()).collection(this.collectionPath)
    let query = collectionRef

    query = query.where('_fl_meta_.env', '==', this.collectionEnv)
    query = query.where('_fl_meta_.locale', '==', this.collectionLocale)
    query = query.where('_fl_meta_.schema', '==', this.collectionSection)

    const formatResult = result => {
      return { id: result.docs[0].id, ...result.docs[0].data() }
    }

    return query.get().then(formatResult)
  }
}
