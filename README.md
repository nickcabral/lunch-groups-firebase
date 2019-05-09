## Dev Setup
Install the firebase cli
``` sh
npm i -g firebase-tools
```
Sign in to the firebase cli
``` sh
firebase login
```

## Deploying changes to firebase
Only functions
``` sh
firebase deploy --only functions
```
Only firestore rules and indexes
``` sh
firebase deploy --only firestore
```

## Run a local servers for firestore and functions
**TODO**