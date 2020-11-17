// importing the "people" and "ages" properties from the object exported
const { people, ages } = require('./people');

// xyz receives the values exported from the required file
console.log(people, ages);

// importing the embedded module "os"
const os = require('os');

console.log(os.platform(), os.homedir());