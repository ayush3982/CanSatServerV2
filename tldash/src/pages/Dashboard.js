import React, {useEffect, useState} from "react";
import SerialBuffer from "../components/Buffer/SerialBuffer";
import Dash from "../components/Dash";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

function Dashboard() {

    const [tData, setTData] = useState();
    const [missionTime, setMissionTime] = useState("");
    const [packetType, setPacketType] = useState("");
    const [packetCount, setPacketCount] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:3000/tData.json')
                .then(response => {
                    const n = response.data.length - 1; 
                    setTData(response.data[n])
                    setMissionTime(response.data[n].MISSION_TIME)
                    setPacketType(response.data[n].PACKET_TYPE)
                    setPacketCount(response.data[n].PACKET_COUNT)
                })
            } catch (err) {
                console.log(err);
            }
        }
        const id = setInterval(() => {
            fetchData(); // <-- (3) invoke in interval callback
        }, 1);
        fetchData();
        return () => clearInterval(id);
    }, [])

    return (
        <div className="flex flex-col h-full w-full bg-yellowish">
            <Header mt = {missionTime} pc = {packetCount} pt = {packetType} />
            <SerialBuffer/>
            <Dash />
            <Footer />
        </div>
    );
}

export default Dashboard;
