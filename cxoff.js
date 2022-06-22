var {SerialPort} = require("serialport");
var message = "CX,OFF";

const port = new SerialPort({ path: '/dev/cu.usbserial-0001', baudRate: 9600 })

port.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});