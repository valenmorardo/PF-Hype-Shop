import React, { useState, useEffect } from 'react';
import response from "./data.json"
import Chart from './charts'

function Index() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);


  useEffect(() => {
    if(show){
      setData(response)

    }

  }, [show]);


  return (
    <div>
      { show ?
      <span>
      <h2>Available charts</h2>
      { show && data && data.charts.map((chartData, i) => (
        <Chart chart={chartData} key={i}/>
      ))}

      </span>
      :

      <h2>No charts available </h2>
      }
      <button onClick={() => setShow(!show)}>
      { show ? "Hide data" : "Fetch data" }
      </button>
    </div>
  );
}
export default Index;
