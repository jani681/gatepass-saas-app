// Import Firebase scripts from CDN
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Firebase App Config
firebase.initializeApp({
    apiKey: "AIzaSyBuYYn6V3jqUs47fnVfW1OlCywfyDX6ix0",
    projectId: "gatepass-saas",
    messagingSenderId: "788886920648",
    appId: "1:788886920648:web:acf750800bf8a5b0b4f4fd"
});

const messaging = firebase.messaging();

// Background Notification Handler
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo.png' // Agar aapke paas icon hai, warna ye line hata sakte hain
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
