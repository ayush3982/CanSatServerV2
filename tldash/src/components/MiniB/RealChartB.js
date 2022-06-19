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

const RealChartB = (props) => {
  const canvas = useRef(null);

  const [tData, setTData] = useState();
  const [tDataFull, setTDataFull] = useState([]);
  const [counter, setCounter] = useState(0);
  const [range, setRange] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
        try {
            await axios.get('http://localhost:3000/tData.json')
            .then(response => {
                const n = response.data.length - 1; 
                setTData(response.data[n])
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

  let missionTime = []

  for(let i = 0; i < tDataFull.length; i++) {
    missionTime.push((tDataFull[i].MISSION_TIME))
  }


  let gyroR = []

  for(let i = 0; i < tDataFull.length; i++) {
    gyroR.push(Number(tDataFull[i].GYRO_R))
  }

  let gyroP = []

  for(let i = 0; i < tDataFull.length; i++) {
    gyroP.push(Number(tDataFull[i].GYRO_P))
  }
  let gyroY = []

  for(let i = 0; i < tDataFull.length; i++) {
    gyroY.push(Number(tDataFull[i].GYRO_Y))
  }

  let accelR = []

  for(let i = 0; i < tDataFull.length; i++) {
    accelR.push(Number(tDataFull[i].ACCEL_R))
  }

  let accelP = []

  for(let i = 0; i < tDataFull.length; i++) {
    accelP.push(Number(tDataFull[i].ACCEL_P))
  }
  let accelY = []

  for(let i = 0; i < tDataFull.length; i++) {
    accelY.push(Number(tDataFull[i].ACCEL_Y))
  }

  let magR = []

  for(let i = 0; i < tDataFull.length; i++) {
    magR.push(Number(tDataFull[i].MAG_R))
  }

  let magP = []

  for(let i = 0; i < tDataFull.length; i++) {
    magP.push(Number(tDataFull[i].MAG_P))
  }
  let magY = []

  for(let i = 0; i < tDataFull.length; i++) {
    magY.push(Number(tDataFull[i].MAG_Y))
  }

  let dataR = [];
  let dataP = [];
  let dataY = []

  if(props.subtype == 'Gyro') {
    dataR = gyroR;
    dataP = gyroP;
    dataY = gyroY;
  }

  if(props.subtype == 'Acceleration') {
    dataR = accelR;
    dataP = accelP;
    dataY = accelY;
  }

  if(props.subtype == 'Mag') {
    dataR = magR;
    dataP = magP;
    dataY = magY;
  }

  const [datar, setDataR] = useState(dataR.slice(0, 5));
  const [datap, setDataP] = useState(dataP.slice(0, 5));
  const [datay, setDataY] = useState(dataY.slice(0, 5));
  const [slicedLabels, setSlicedLabels] = useState(missionTime.slice(0, 5));

  // generate fake data
   
  let rgba0 = ['rgba(248,222,189,1)', 'rgba(218,129,132,1)', 'rgba(208,251,255,1)'];
  let rgba1 = ['rgba(251,235,214,0)', 'rgba(202,107,110,0)', 'rgba(221,242,244,0)'];
  let stroke = ["#F3A53F", "#CA6B6E", "#478F96"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
  
    setDataR(dataR.slice(dataR.length - 5, dataR.length))
    setDataP(dataP.slice(dataP.length - 5, dataP.length))
    setDataY(dataY.slice(dataY.length - 5, dataY.length))

    setSlicedLabels(missionTime.slice(missionTime.length - 5, missionTime.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(() => {
    return
  }, [])

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradientr = ctx.createLinearGradient(0, 0, 0, 100);
    gradientr.addColorStop(0, rgba1[0]);   
    gradientr.addColorStop(1, rgba1[0]);
    var gradientp = ctx.createLinearGradient(0, 0, 0, 100);
    gradientp.addColorStop(0, rgba1[1]);   
    gradientp.addColorStop(1, rgba1[1]);
    var gradienty = ctx.createLinearGradient(0, 0, 0, 100);
    gradienty.addColorStop(0, rgba1[2]);   
    gradienty.addColorStop(1, rgba1[2]);

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: slicedLabels,
        datasets: [
          {
            backgroundColor: gradientr,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[0],
            spanGaps: true,
            data:datar,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            backgroundColor: gradientp,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[1],
            spanGaps: true,
            data:datap,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            backgroundColor: gradienty,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[2],
            spanGaps: true,
            data:datay,
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
            suggestedMin: 0,
            suggestedMax: 1,
          },
        },
        animation: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
  }, [datar]);

  return (
    <div className="flex-grow">
      {console.log("muipui",dataR)}
      <canvas ref={canvas} height={130}></canvas>
    </div>
  );
}

export default RealChartB;
