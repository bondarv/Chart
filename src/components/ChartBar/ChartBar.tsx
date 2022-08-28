interface DataType {
  name: string;
  time: number;
}

export function ChartBar({ data }: { data: DataType[] }) {
  const sum = data.reduce((result, current) => result + current.time, 0);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="bar">
          <span className="bar-title">{item.name}</span>
          <div style={{ width: '100%', display: 'flex' }}>
            {data.map((item, barIndex) => (
              <div
                key={barIndex}
                style={{
                  width: ((item.time / sum) * 100).toFixed(1) + '%',
                  backgroundColor: index === barIndex ? '#30d5c8' : '#D3D3D3',
                }}
                className="bar-progress"
              >
                {index === barIndex && item.time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
