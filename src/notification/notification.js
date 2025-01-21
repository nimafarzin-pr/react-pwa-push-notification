const vapidPublicKey = 'BDoDrobLJcJoM3g7U821ccGoaTRqwEfMuqkc7DeH1cDWhEHOXdQm_s9j3rIQLTxGM72sVDeMWPmQDsXnGsBKB9w';

// Replace this with a dynamically injected Ngrok URL at build time
const serverBaseURL = 'http://localhost:3000';

export async function subscribeToNotifications() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });

      await fetch(`${serverBaseURL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription),
      });

      await fetch(`${serverBaseURL}/send-notification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Subscribed to notifications!');
    } catch (error) {
      console.error('Error subscribing to notifications:', error);
    }
  } else {
    console.warn('Push messaging is not supported');
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
