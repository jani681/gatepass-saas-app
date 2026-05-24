importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBuYYn6V3jqUs47fnVFvW1OlCywfyDX6ix0",
  authDomain: "gatepass-saas.firebaseapp.com",
  projectId: "gatepass-saas",
  storageBucket: "gatepass-saas.appspot.com",
  messagingSenderId: "788886920648",
  appId: "1:788886920648:web:acf750800bf8a5b0b4f4fd"
});

const messaging = firebase.messaging();

/* Background notification handler */
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification("Gate Alert!", {
    body: payload.data?.body || "New guest detected",
    icon: "https://cdn-icons-png.flaticon.com/512/6195/6195700.png",
    vibrate: [200,100,200]
  });
});
