var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://bestowclipboard.firebaseio.com",
});

var db = firebase.database();
const clipsRef = db.ref("data/clips");
// var ref = db.ref("restricted_access/secret_document");
clipsRef.once("value", function (snapshot) {
  console.log(snapshot.val());
});

// var clipsRef = ref.child("clips");
const ABOUT_TO_PUSH = [
  // need to find a way to push
  {
    copiedDate: "99999999",
    hash: "234234234242",
    isFavorite: true,
    isFromCloudPro: false,
    isFromSync: false,
    isManual: true,
    isMerged: false,
    isModified: false,
    lastCopiedDate: "4323432423",
    originalText: "This is the original text",
    shortText: "This is Short",
    sourceUrl: "https://www.bestow-clipboard.com",
  },
  {
    copiedDate: "8888888888",
    hash: "234234234242",
    isFavorite: true,
    isFromCloudPro: false,
    isFromSync: false,
    isManual: true,
    isMerged: false,
    isModified: false,
    lastCopiedDate: "4323432423",
    originalText: "This is the original text another",
    shortText: "This is Short",
    sourceUrl: "https://www.bestow-clipboard.com",
  },
];
clipsRef.set([
  {
    copiedDate: "12323432",
    hash: "234234234242",
    isFavorite: true,
    isFromCloudPro: false,
    isFromSync: false,
    isManual: true,
    isMerged: false,
    isModified: false,
    lastCopiedDate: "4323432423",
    originalText: "This is the original text",
    shortText: "This is Short",
    sourceUrl: "https://www.bestow-clipboard.com",
  },
  {
    copiedDate: "32423423424234",
    hash: "234234234242",
    isFavorite: true,
    isFromCloudPro: false,
    isFromSync: false,
    isManual: true,
    isMerged: false,
    isModified: false,
    lastCopiedDate: "4323432423",
    originalText: "This is the original text another",
    shortText: "This is Short",
    sourceUrl: "https://www.bestow-clipboard.com",
  },
]);
