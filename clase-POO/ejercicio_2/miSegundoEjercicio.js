var os = require('os');
console.log(os.release());
console.log(os.platform());
console.log('free mem: ', os.freemem());
console.log('total mem: ', os.totalmem());
