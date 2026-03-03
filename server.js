const { exec } = require('child_process');
function pingServer(userIP) {
  // DANGER: Taking untrusted user input and putting it directly into a system command!
  // An attacker could pass an IP like: "8.8.8.8; rm -rf /"
  const command = "ping -c 4 " + userIP;
  exec(command, (error, stdout, stderr) => {
  console.log(stdout);
  });
}
