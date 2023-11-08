import React from 'react'
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts';

const data = {
    series: [
      {
        
        data: [10, 50, 30, 90, 40, 80, 90],
      },
    ],
    option: {
      chart: {
        type: "area",
        height: "auto",
        
        stacked: false,
        toolbar:{
            show:false
        },
        zoom:{
          enabled:false
        }
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#fff"],
      },
      tooltip: {
        show:false,
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
    //   xaxis: {
    //     show:false
    //   },
      yaxis: {
        show: false
      },
      xaxis: {
        
        labels: {
          show: false,
        },
        axisBorder:{
            show: false,
        },
        axisTicks:{
            show:false,
        }
      },
  
    },
  };

const Graph = () => {
 
  return (
    <div className=" flex w-[260px] ">
    <Chart options={data.option as any} series={data.series} type="area" />
    </div>
  )
}

export default Graph
