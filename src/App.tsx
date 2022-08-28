import { useEffect, useState } from 'react';
import './App.css';
import { ChartBar } from './components/ChartBar';
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
        <div style={{ fontSize: '20px', marginBottom: '40px' }}>
          SPENT TIME (SECONDS)
        </div>
        <ChartBar data={data} />
        <button
          style={{
            cursor: 'pointer',
          }}
          onClick={updateData}
        >
          Update data
        </button>
      </div>
    </div>
  );
}

export default App;
