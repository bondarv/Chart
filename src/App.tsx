import { useEffect, useState } from 'react';
import './App.css';
import { Chart } from './components/Chart/Chart';
import { getNewValue } from './utils/getNewValue';

export const INITIAL_DATA = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateData = () => {
    setData((data) =>
      data.map((item) => ({
        ...item,
        time: getNewValue(item.time),
      }))
    );
  };

  useEffect(() => {
    const INTERVAL_TIME = 31800;
    const intervalId = setInterval(updateData, INTERVAL_TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <h1 className="title">SPENT TIME (SECONDS)</h1>
        <Chart data={data} />
        <button className="update-button" onClick={updateData}>
          Update data
        </button>
      </div>
    </div>
  );
}

export default App;
