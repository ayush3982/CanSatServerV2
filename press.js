var {SerialPort} = require("serialport");
const fs = require("fs");

// const port = new SerialPort({ path: '/dev/cu.usbserial-AL017DBD', baudRate: 9600 })

let final = []

const task = (message, i) => {
    setTimeout(() => {
        port.write(message, function(err) {
            if (err) {
              return console.log("Error on write: ", err.message);
            }
            console.log("Message sent successfully");
          });
    }, 2000 * i);
}


fs.readFile("./pressure.json", "utf-8", (err, data) => {
    if(err) {
        console.log("File read failed", err);
        return;
    }

    let val = JSON.parse(data);
    for (let i = 0; i < val.length; i++) {
        final.push(val[i].command);
        var message = val[i].command
        // port.write(message, function(err) {
        //     if (err) {
        //       return console.log("Error on write: ", err.message);
        //     }
        //     console.log("Message sent successfully");
        // });
        task(message, i);
    }
})

