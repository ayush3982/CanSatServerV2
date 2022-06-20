var {SerialPort} = require("serialport");
var message = "CMD,1095,ST,04:57:12";

const port = new SerialPort({ path: '/dev/cu.usbserial-AL017DBD', baudRate: 9600 })

port.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});