import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale,
} from "chart.js";
import 'chartjs-adapter-moment';
Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale
);

const RealChart = (props) => {
  const canvas = useRef(null);
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(10);
  const [tData, setTData] = useState();
  const [tDataFull, setTDataFull] = useState([]);
  const [cDataFull, setCDataFull] = useState([]);
  const [tpSoftState, setTpSoftState] = useState();
  const [alt, setAlt] = useState([]);

  // for(let i = 0; i < props.tData.length; i++) {
  //   altData.push(props.tData[i].TP_ALTITUDE)
  // }

  useEffect(() => {
    const fetchData = async () => {
        try {
            await axios.get('http://localhost:3000/tData.json')
            .then(response => {
                const n = response.data.length - 1; 
                setTData(response.data[n])
                setTpSoftState(response.data[n].TP_SOFTWARE_STATE)
               
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

useEffect(() => {
  const fetchData = async () => {
      try {
          await axios.get('http://localhost:3000/cData.json')
          .then(response => {
              setCDataFull(response.data)
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


  // Dummy data to be looped
  // const data = [
  //   298.6, 297.3, 295.9, 294.5, 293.1, 291.8, 290.4, 289.0, 287.6, 286.3, 284.9, 283.5, 282.1, 280.8
  // ];

  let altData = []

  for(let i = 0; i < tDataFull.length; i++) {
    altData.push(Number(tDataFull[i].TP_ALTITUDE))
  }

  let cAltData = []

  for(let i = 0; i < cDataFull.length; i++) {
    cAltData.push(Number(cDataFull[i].ALTITUDE))
  }

  let cVolt = [];

  for(let i = 0; i < cDataFull.length; i++) {
    cVolt.push(Number(cDataFull[i].VOLTAGE))
  }

  let missionTime = []

  for(let i = 0; i < tDataFull.length; i++) {
    missionTime.push((tDataFull[i].MISSION_TIME))
  }

  let temperature = []

  for(let i = 0; i < tDataFull.length; i++) {
    temperature.push(Number(tDataFull[i].TP_TEMP))
  }

  let voltage = []

  for(let i = 0; i < tDataFull.length; i++) {
    voltage.push(Number(tDataFull[i].TP_VOLTAGE))
  }

  let pointingError = [];

  for(let i = 0; i < tDataFull.length; i++) {
    pointingError.push(Number(tDataFull[i].POINTING_ERROR))
  }

  let cTemp = []

  for(let i = 0; i < cDataFull.length; i++) {
    cTemp.push(Number(cDataFull[i].TEMP))
  }

  let data = [];

  if(props.subtype == "Altitude") {
    data = altData
  }

  if(props.subtype == "Voltage") {
    data = voltage
  }

  if(props.subtype == "Temperature") {
    data = temperature
  }

  if(props.subtype == "Pointing Error") {
    data = pointingError
  }

  if(props.subtype == "Container Altitude") {
    data = cAltData
  }

  if(props.subtype == "Container Voltage") {
    data = cVolt
  }

  if(props.subtype == "Container Temperature") {
    data = cTemp
  }

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
  
    setSlicedData(data.slice(data.length - 5, data.length))
    console.log("here", slicedData);

    setSlicedLabels(missionTime.slice(missionTime.length - 5, missionTime.length));
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  


  let rgba0;
  let rgba1;
  let stroke;
  switch(props.color){
    case 0:
      rgba0 = 'rgba(248,222,189,1)'
      rgba1 = 'rgba(251,235,214,0)'
      stroke = "#F3A53F"
      break;
    case 1:
      rgba0 = 'rgba(218,129,132,1)'
      rgba1 = 'rgba(202,107,110,0)'
      stroke = "#CA6B6E"
      break;
    case 2:
      rgba0 = 'rgba(208,251,255,1)'
      rgba1 = 'rgba(221,242,244,0)'
      stroke = "#478F96"
      break;
    default:
  }


  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, rgba0);   
    gradient.addColorStop(1, rgba1);
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: slicedLabels,
        datasets: [
          {
            backgroundColor: gradient,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke,
            spanGaps: true,
            data: slicedData,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'millisecond',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'mm:ss',
              },
            },
            ticks: {
              autoSkipPadding: 0,
              maxRotation: 40,
            },
          },
          y: {
            display: false,
          },
        },
        animation: false,

      },
    });
    return () => chart.destroy();
  }, [slicedData]);

  return (
    <div className="">
      {console.log("alt", altData)}
      {/* {console.log(pointingError)} */}
      {console.log("hui", missionTime)}
      <canvas ref={canvas} height={130}></canvas>
    </div>
  );
}

export default RealChart;
