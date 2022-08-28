import './Chart.css';

interface DataType {
  name: string;
  time: number;
}

export function Chart({ data }: { data: DataType[] }) {
  const sum = data.reduce((result, current) => result + current.time, 0);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="bar-wrapper">
          <span className="bar-name">{item.name}</span>
          <div className="bar">
            {data.map((item, barIndex) => (
              <div
                key={barIndex}
                className="bar-progress"
                style={{
                  width: (item.time / sum) * 100 + '%',
                  backgroundColor: index === barIndex ? '#30d5c8' : '#D3D3D3',
                  position: index === barIndex ? 'relative' : undefined,
                }}
              >
                {index === barIndex && (
                  <div className="bar-text">{item.time}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
