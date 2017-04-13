var Accessory = require('../').Accessory;
var Service = require('../').Service;
var Characteristic = require('../').Characteristic;
var uuid = require('../').uuid;
var sensorLib=require('../').sensorLib
var FAKE_SENSOR = {
  currentTemperature:20,
  getTemperature: function() {
    console.log("Getting the current temperature!");
    return FAKE_SENSOR.currentTemperature;
  },
  randomizeTemperature: function() {
    var j = parseInt(sensorLib.read(11,18).temperature.toFixed(0));
    FAKE_SENSOR.currentTemperature =j;
    console.log(typeof sensorLib.read(11,18).temperature.toFixed(0));
  }
}
var sensorUUID = uuid.generate('hap-nodejs:accessories:temperature-sensor');
var sensor = exports.accessory = new Accessory('Temperature Sensor', sensorUUID);
sensor.username = "C1:5D:3A:AE:5E:FA";
sensor.pincode = "031-45-154";
sensor
  .addService(Service.TemperatureSensor)
  .getCharacteristic(Characteristic.CurrentTemperature)
  .on('get', function(callback) {
    callback(null, FAKE_SENSOR.getTemperature());
  });
setInterval(function() {
  FAKE_SENSOR.randomizeTemperature();
  sensor
    .getService(Service.TemperatureSensor)
    .setCharacteristic(Characteristic.CurrentTemperature, FAKE_SENSOR.currentTemperature);
}, 4000);
