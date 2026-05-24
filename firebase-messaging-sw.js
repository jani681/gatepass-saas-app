importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

/* ================= FIREBASE INIT ================= */

firebase.initializeApp({
  apiKey: "AIzaSyBuYYn6V3jqUs47fnVFvW1OlCywfyDX6ix0",
  authDomain: "gatepass-saas.firebaseapp.com",
  projectId: "gatepass-saas",
  storageBucket: "gatepass-saas.appspot.com",
  messagingSenderId: "788886920648",
  appId: "1:788886920648:web:acf750800bf8a5b0b4f4fd"
});

const messaging = firebase.messaging();

/* ================= BACKGROUND NOTIFICATION ================= */

messaging.onBackgroundMessage((payload) => {

  console.log("📩 Background message received:", payload);

  const title = payload?.notification?.title || "🚪 Gate Alert!";
  const body = payload?.notification?.body || "New guest detected at gate";
  const icon = payload?.notification?.icon || "https://cdn-icons-png.flaticon.com/512/6195/6195700.png";

  self.registration.showNotification(title, {
    body: body,
    icon: icon,
    badge: icon,
    vibrate: [200, 100, 200],
    tag: "gate-alert",
    renotify: true,
    requireInteraction: true,
    data: payload?.data || {}
  });
});

/* ================= CLICK ACTION ================= */

self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(clientList) {
      for (let client of clientList) {
        if (client.url && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});
