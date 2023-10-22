const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./onlyadd.json', 'utf-8'));

console.log(data);