'use strict';

import * as functions from 'firebase-functions';

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

// const runtimeOpts = {
//   timeoutSeconds: 500,
//   memory: '1GB'
// }

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

exports.sendContactRequest = functions.firestore
  .document('contacts/{contactId}')
  .onCreate((snap) => {
    if (snap && snap.data()) {
      // @ts-ignore
      const { email, name, body } = snap.data()
      const msg = {
        to: 'vbourdeau3@gmail.com',
        from: email,
        templateId: 'd-1c259b8d491643968dfddaa8a36c1eba',
        dynamic_template_data: {
          name,
          email,
          body
        }
      }
      return sgMail.send(msg)
    } else {
      return null
    }
})
