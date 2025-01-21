const fs = require('fs');
const path = require('path');

async function updateNgrokURL() {
  const response = await fetch('http://127.0.0.1:4040/api/tunnels');
  const data = await response.json();
  const publicURL = data.tunnels.find(tunnel => tunnel.proto === 'https').public_url;
  console.log(path.resolve("./src/notification/notification.js"));
  const notificationFilePath = path.resolve("./src/notification/notification.js"); // Adjust the path as needed
  let fileContent = fs.readFileSync(notificationFilePath, 'utf8');
  fileContent = fileContent.replace('NGROK_URL_PLACEHOLDER', publicURL);

  fs.writeFileSync(notificationFilePath, fileContent, 'utf8');
  console.log(`Updated notification.js with Ngrok URL: ${publicURL}`);
}

updateNgrokURL();
