const { execFile } = require('child_process');
const net = require('net');

function pingServer(userIP) {
  // Validate input: allow only IPv4/IPv6 literals (no hostnames, no extra chars)
  if (net.isIP(userIP) === 0) {
    throw new Error('Invalid IP address');
  }

  // No shell is used here, so characters like ; | & won't be interpreted
  execFile('ping', ['-c', '4', userIP], { timeout: 10_000 }, (error, stdout, stderr) => {
    if (error) {
      // avoid leaking stderr to logs if you don't need it
      console.error('Ping failed:', error.message);
      return;
    }
    console.log(stdout);
  });
}

module.exports = { pingServer };
