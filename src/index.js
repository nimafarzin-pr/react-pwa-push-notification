import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js').then((swReg) => {
//     console.log('Service Worker Registered', swReg);
//     swReg.pushManager
//       .subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: 'BDoDrobLJcJoM3g7U821ccGoaTRqwEfMuqkc7DeH1cDWhEHOXdQm_s9j3rIQLTxGM72sVDeMWPmQDsXnGsBKB9w',
//       })
//       .then((subscription) => console.log('Subscribed:', subscription))
//       .catch((err) => console.error('Subscription failed:', err));
//   });
// }
