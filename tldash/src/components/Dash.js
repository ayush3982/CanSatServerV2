import React, {useState, useEffect} from "react";
import axios from "axios";
import Actions from "./Actions/Actions";
import Expagraph from "./ExpandedGraph/Expagraph";
import ExpagraphB from "./ExpandedGraphB/ExpagraphB";
import General from "./General/General";
import GPS from "./GPS/GPS";
import Minigraph from "./MiniA/Minigraph";
import MinigraphB from "./MiniB/MinigraphB";
import SoftwareStateC from "./SoftwareState/SoftwareStateC";
import SoftwareStateTP from "./SoftwareState/SoftwareStateTP";

import TDGraph from "./TDGraph/TDGraph";

const Dash = () => {

    const [cData, setCData] = useState();
    const [gpsTime, setGpsTime] = useState();
    const [gpsLat, setGpsLat] = useState();
    const [gpsLong, setGpsLong] = useState();
    const [gpsAlt, setGpsAlt] = useState();
    const [gpsSats, setGpsSats] = useState();
    const [softState, setSoftState] = useState();
    const [cmdEcho, setCmdEcho] = useState();
    const [mode, setMode] = useState();
    const [tpR, setTPR] = useState("");
    const [cAlt, setCAlt] = useState();
    const [cTemp, setCTemp] = useState();
    const [cVolt, setCVolt] = useState()
    
    const [tData, setTData] = useState();
    const [tDataFull, setTDataFull] = useState([]);
    const [tpSoftState, setTpSoftState] = useState();
    const [alt, setAlt] = useState();
    const [temp, setTemp] = useState();
    const [volt, setVolt] = useState();
    const [ptError, setPTError] = useState();
    const [gyroR, setGyroR] = useState();
    const [gyroP, setGyroP] = useState();
    const [gyroY, setGyroY] = useState();
    const [accelR, setAccelR] = useState();
    const [accelP, setAccelP] = useState();
    const [accelY, setAccelY] = useState();
    const [magR, setMagR] = useState();
    const [magP, setMagP] = useState();
    const [magY, setMagY] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:3000/cData.json')
                .then(response => {
                    const n = response.data.length - 1; 
                    setCData(response.data[n])
                    setGpsTime(response.data[n].GPS_TIME)
                    setGpsLat(response.data[n].GPS_LATITUDE)
                    setGpsLong(response.data[n].GPS_LONGITUDE)
                    setGpsAlt(response.data[n].GPS_ALTITUDE)
                    setGpsSats(response.data[n].GPS_SATS)
                    setSoftState(response.data[n].SOFTWARE_STATE)
                    setCmdEcho(response.data[n].CMD_ECHO)
                    setMode(response.data[n].MODE) 
                    setTPR(response.data[n].TP_RELEASED)
                    setCAlt(response.data[n].ALTITUDE)
                    setCTemp(response.data[n].TEMP)
                    setCVolt(response.data[n].VOLTAGE)
                })
            } catch (err) {
                console.log(err);
            }
        }
        const id = setInterval(() => {
            fetchData(); // <-- (3) invoke in interval callback
        }, 100);
        fetchData();
        return () => clearInterval(id);
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:3000/tData.json')
                .then(response => {
                    const n = response.data.length - 1; 
                    setTData(response.data[n])
                    setTpSoftState(response.data[n].TP_SOFTWARE_STATE)
                    setAlt(response.data[n].TP_ALTITUDE)
                    setTemp(response.data[n].TP_TEMP)
                    setVolt(response.data[n].TP_VOLTAGE)
                    setPTError(response.data[n].POINTING_ERROR)
                    setGyroR(response.data[n].GYRO_R);
                    setGyroP(response.data[n].GYRO_P);
                    setGyroY(response.data[n].GYRO_Y);
                    setAccelR(response.data[n].ACCEL_R);
                    setAccelP(response.data[n].ACCEL_P);
                    setAccelY(response.data[n].ACCEL_Y);
                    setMagR(response.data[n].MAG_R);
                    setMagP(response.data[n].MAG_P);
                    setMagY(response.data[n].MAG_Y);
                    setTDataFull(response.data)
                })
            } catch (err) {
                console.log(err);
            }
        }
        const id = setInterval(() => {
            fetchData(); // <-- (3) invoke in interval callback
        }, 100);
        fetchData();
        return () => clearInterval(id);
    }, [])
        
    
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 px-10 font-mulish divide-y-2 md:divide-x-2 md:divide-y-0 mb-auto">
            <div className="mb-2 md:mr-2 md:mb-0">
                <h1 className="font-bold text-base mb-3 ml-2">
                    Tethered Payload
                </h1>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 overflow-hidden">
                    {/* <Expagraph />
                    <TDGraph/> */}
                    <Minigraph subtype="Altitude" unit="meters" color={0} alt = {alt}/>
                    <Minigraph subtype="Voltage" unit="volts" color={1} alt = {volt}/>
                    <Minigraph subtype="Temperature" unit="Celsius" color={2} alt = {temp}/>
                    <MinigraphB subtype="Acceleration" unit="meters" r = {gyroR} p = {gyroP} y = {gyroY} />
                    <MinigraphB subtype="Gyro" unit="°/s"r = {accelR} p = {accelP} y = {accelY} />
                    <MinigraphB subtype="Mag" unit="gauss" r = {magR} p = {magP} y = {magY} />
                    <Minigraph subtype="Pointing Error" unit="%" color={1} alt ={ptError}/>
                    <SoftwareStateTP softState = {tpSoftState}/>
                </div>
            </div>
            <div className="pt-2 md:pl-2 md:pt-0">
                <h1 className="font-bold text-base mb-3 ml-2">Container</h1>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 overflow-hidden">
                    <Minigraph subtype="Container Altitude" unit="meters" color={0} alt = {cAlt}/>
                    <Minigraph subtype="Container Voltage" unit="volts" color={1} alt = {cVolt} />
                    <Minigraph subtype="Container Temperature" unit="Celsius" color={2} alt = {cTemp}/>
                    <GPS gt = {gpsTime} glat = {gpsLat} gLong = {gpsLong} gAlt = {gpsAlt} gS = {gpsSats}/>
                    <General cmdE = {cmdEcho} mode = {mode} tp = {tpR} />
                    <SoftwareStateC softState = {softState} />
                    <Actions />
                </div>
            </div> 
        </div>
    );
}

export default Dash;
