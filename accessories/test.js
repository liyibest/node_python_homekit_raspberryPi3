var sensor = require('node-dht-sensor');
 
var c=sensor.read(11,18).temperature.toFixed(1);
console.log(c);
