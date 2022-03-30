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
    const [tpR, setTPR] = useState();

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
                    {/* <Expagraph /> */}
                    {/* <TDGraph/> */}
                    <Minigraph subtype="Altitude" unit="meters" color={0} />
                    <Minigraph subtype="Voltage" unit="volts" color={1} />
                    <Minigraph subtype="Temperature" unit="Celsius" color={2} />
                    <MinigraphB subtype="Acceleration" unit="meters" />
                    <MinigraphB subtype="Gyro" unit="°/s" />
                    <MinigraphB subtype="Mag" unit="gauss" />
                    <Minigraph subtype="Pointing Error" unit="%" color={1}/>
                    <SoftwareStateTP />
                </div>
            </div>
            <div className="pt-2 md:pl-2 md:pt-0">
                <h1 className="font-bold text-base mb-3 ml-2">Container</h1>
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 overflow-hidden">
                <Minigraph subtype="Altitude" unit="meters" color={0} />
                    <Minigraph subtype="Voltage" unit="volts" color={1} />
                    <Minigraph subtype="Temperature" unit="Celsius" color={2} />
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
