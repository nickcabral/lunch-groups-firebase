import * as functions from 'firebase-functions';


export const events = functions.https.onRequest((request, response) => {
  //response.send(functions.firestore.document(`/events`));
});

export const users = functions.https.onRequest((request, response) => {
  //response.send(functions.firestore.document);
});