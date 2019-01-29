const os = require('os');

const chalk = require('chalk');

function getIp(type = 'IPv4', ) {
  let interface = os.networkInterfaces();
  for (key in interface) {
    let arr = interface[key];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      // console.log(item)
      if (item.family == type && item.address != '127.0.0.1') {
        // console.log(item)
        return item.address;
      }
    }
  }
}
function logIp(port) {
  let localIP = getIp();
  console.log('App running at:')
  console.log(`- Local:   ${chalk.green(`http://localhost:${port}`)}`)
  console.log(`- Network: ${chalk.green(`http://${localIP}:${port}`)}`)
}
exports.getIp = getIp;
exports.logIp = logIp;