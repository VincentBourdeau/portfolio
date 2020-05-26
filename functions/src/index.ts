'use strict'

import * as functions from 'firebase-functions'
const postmark: any = require('postmark')

// const runtimeOpts = {
//   timeoutSeconds: 500,
//   memory: '1GB'
// }

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.sendContactRequest = functions.firestore
  .document('contacts/{contactId}')
  .onCreate((snap: functions.firestore.DocumentSnapshot): string => {

    console.log('sendContactRequest has started!')

    if (snap && snap.data()) {
      // Send an email
      const data: any = snap.data()
      const client: any = new postmark.ServerClient('49586da6-0a85-48de-9159-20936a7a384d')
      const { email, name, body } = data

      console.log('Client', client)

      client.sendEmailWithTemplate({
        "From": "hosting+vb@showadz.io",
        "To": "vbourdeau3@gmail.com",
        "TemplateAlias": "vb-basic",
        "TemplateModel": {
          "product_url": "#",
          "product_name": "VB",
          email,
          name,
          body,
          "company_name": "",
          "company_address": "",
          "sender_name": "",
          "help_url": ""
        }
      })

      return 'sent'
    } else {
      return 'null'
    }
})
