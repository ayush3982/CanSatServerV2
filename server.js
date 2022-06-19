TEAM_ID = "1095";
USERNAME = "1095";
PASSWORD = "Riosfago833";

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const {readdirSync} = require('fs');
require('dotenv').config()
const {SerialPort} = require("serialport");
const { ReadlineParser } = require('@serialport/parser-readline');
const ObjectsToCsv = require('objects-to-csv');
const csvtojson = require('csvtojson');
const fs = require('fs');

const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://cansat.info', {
    username: USERNAME,
    password: PASSWORD,
    port: 1883
});

// initialize the express server

const app = express();

// Taking care of Cross-Origin Resource Sharing

let tString

const port = new SerialPort({ path: 'COM10', baudRate: 9600 })

const readSerialData = async (data) => {
    let tel = data
    tString = data
    console.log('mango', tel);
    let telArr = data.split(',');
    console.log(telArr);
    if (telArr[3] == 'T') {
        // TEAM_ID, MISSION_TIME, PACKET_COUNT, PACKET_TYPE, TP_ALTITUDE,
        // TP_TEMP, TP_VOLTAGE, GYRO_R, GYRO_P, GYRO_Y, ACCEL_P, ACCEL_P,
        // ACCEL_Y, MAG_R, MAG_P, MAG_Y, POINTING_ERROR, TP_SOFTWARE_STATE
        const tData = [{
            TEAM_ID : telArr[0], 
            MISSION_TIME : telArr[1], 
            PACKET_COUNT : telArr[2], 
            PACKET_TYPE : telArr[3], 
            TP_ALTITUDE : telArr[4],
            TP_TEMP : telArr[5], 
            TP_VOLTAGE : telArr[6], 
            GYRO_R : telArr[7], 
            GYRO_P : telArr[8], 
            GYRO_Y : telArr[9], 
            ACCEL_R : telArr[10], 
            ACCEL_P : telArr[11],
            ACCEL_Y : telArr[12], 
            MAG_R : telArr[13], 
            MAG_P : telArr[14], 
            MAG_Y : telArr[15], 
            POINTING_ERROR : telArr[16], 
            TP_SOFTWARE_STATE : telArr[17], 
        }]
        const csv = new ObjectsToCsv(tData)
        await csv.toDisk('tldash/public/tData.csv', { append: true })
        const csvFilePath = 'tldash/public/tData.csv';
        csvtojson()
            .fromFile(csvFilePath)
            .then((json) => {
                console.log("json")
                fs.writeFileSync("tldash/public/tData.json", JSON.stringify(json, null, 2), "utf8", (err) => {
                    if(err) console.log(err);
                })
            })

        const fData = [{
            TEAM_ID : telArr[0], 
            MISSION_TIME : telArr[1], 
            PACKET_COUNT : telArr[2], 
            PACKET_TYPE : telArr[3], 
            TP_ALTITUDE : telArr[4],
            TP_TEMP : telArr[5], 
            TP_VOLTAGE : telArr[6], 
            GYRO_R : telArr[7], 
            GYRO_P : telArr[8], 
            GYRO_Y : telArr[9], 
            ACCEL_R : telArr[10], 
            ACCEL_P : telArr[11],
            ACCEL_Y : telArr[12], 
            MAG_R : telArr[13], 
            MAG_P : telArr[14], 
            MAG_Y : telArr[15], 
            POINTING_ERROR : telArr[16], 
            TP_SOFTWARE_STATE : telArr[17], 
            MODE : 'null',
            TP_RELEASED : 'null', 
            ALTITUDE : 'null', 
            TEMP : 'null', 
            VOLTAGE : 'null', 
            GPS_TIME : 'null', 
            GPS_LATITUDE : 'null', 
            GPS_LONGITUDE : 'null',
            GPS_ALTITUDE : 'null', 
            GPS_SATS : 'null', 
            SOFTWARE_STATE : 'null', 
            CMD_ECHO : 'null'
        }]

        const csvFull = new ObjectsToCsv(fData)
        await csvFull.toDisk('tldash/public/fullData.csv', { append: true })
        const csvFileFullPath = 'tldash/public/fullData.csv';
            csvtojson()
                .fromFile(csvFileFullPath)
                .then((json) => {
                    console.log("json")
                    fs.writeFileSync("tldash/public/fullData.json", JSON.stringify(json, null, 2), "utf8", (err) => {
                        if(err) console.log(err);
                    })
                })
    }
    else {
        // TEAM_ID, MISSION_TIME, PACKET_COUNT, PACKET_TYPE, MODE,
        // TP_RELEASED, ALTITUDE, TEMP, VOLTAGE, GPS_TIME, GPS_LATITUDE,
        // GPS_LONGITUDE, GPS_ALTITUDE, GPS_SATS, SOFTWARE_STATE, CMD_ECHO
        const cData = [{
            TEAM_ID : telArr[0], 
            MISSION_TIME : telArr[1], 
            PACKET_COUNT : telArr[2], 
            PACKET_TYPE : telArr[3], 
            MODE : telArr[4],
            TP_RELEASED : telArr[5], 
            ALTITUDE : telArr[6], 
            TEMP : telArr[7], 
            VOLTAGE : telArr[8], 
            GPS_TIME : telArr[9], 
            GPS_LATITUDE : telArr[10], 
            GPS_LONGITUDE : telArr[11], 
            GPS_ALTITUDE : telArr[12], 
            GPS_SATS : telArr[13], 
            SOFTWARE_STATE : telArr[14], 
            CMD_ECHO : telArr[15], 
        }]
        const csv = new ObjectsToCsv(cData)
        await csv.toDisk('tldash/public/cData.csv', { append: true })
        const csvFilePath = 'tldash/public/cData.csv';
        csvtojson()
            .fromFile(csvFilePath)
            .then((json) => {
                console.log("json")
                fs.writeFileSync("tldash/public/cData.json", JSON.stringify(json, null, 2), "utf8", (err) => {
                    if(err) console.log(err);
                })
            })

        const fData = [{
            TEAM_ID : telArr[0], 
            MISSION_TIME : telArr[1], 
            PACKET_COUNT : telArr[2], 
            PACKET_TYPE : telArr[3], 
            TP_ALTITUDE : 'null',
            TP_TEMP : 'null', 
            TP_VOLTAGE : 'null', 
            GYRO_R : 'null', 
            GYRO_P : 'null', 
            GYRO_Y : 'null', 
            ACCEL_R : 'null', 
            ACCEL_P : 'null',
            ACCEL_Y : 'null', 
            MAG_R : 'null', 
            MAG_P : 'null', 
            MAG_Y : 'null', 
            POINTING_ERROR : 'null', 
            TP_SOFTWARE_STATE : 'null', 
            MODE : telArr[4],
            TP_RELEASED : telArr[5],  
            ALTITUDE : telArr[6],  
            TEMP : telArr[7],  
            VOLTAGE : telArr[8],  
            GPS_TIME : telArr[9], 
            GPS_LATITUDE : telArr[10], 
            GPS_LONGITUDE : telArr[11],
            GPS_ALTITUDE : telArr[12], 
            GPS_SATS : telArr[13], 
            SOFTWARE_STATE : telArr[14], 
            CMD_ECHO : telArr[15]
        }]

        const csvFull = new ObjectsToCsv(fData)
        await csvFull.toDisk('tldash/public/fullData.csv', { append: true })
        const csvFileFullPath = 'tldash/public/fullData.csv';
            csvtojson()
                .fromFile(csvFileFullPath)
                .then((json) => {
                    console.log("json")
                    fs.writeFileSync("tldash/public/fullData.json", JSON.stringify(json, null, 2), "utf8", (err) => {
                        if(err) console.log(err);
                    })
                })
    }
}


const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data',readSerialData )

client.on(
    'connect',
    () => {
        client.subscribe('presence', (err) => {
            if(!err){
                setInterval(() => {
                    client.publish('teams/' + TEAM_ID, tString);
                }, 100);
            }
        });
    }
)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.REACT_URL);
    next();
});

// routes middleware

// readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Online ------------ ${PORT}`))