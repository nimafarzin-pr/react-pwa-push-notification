import React from 'react';
import { subscribeToNotifications } from './notification/notification';

const App = () => {
  return (
    <div>
      <h1>Push Notifications</h1>
      <button onClick={subscribeToNotifications}>Subscribe</button>
    </div>
  );
};

export default App;
