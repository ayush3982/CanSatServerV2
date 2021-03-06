var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(JSON.stringify(time))

var {SerialPort} = require("serialport");
var message = time;

const port = new SerialPort({ path: '/dev/cu.usbserial-AL017DBD', baudRate: 9600 })

port.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});