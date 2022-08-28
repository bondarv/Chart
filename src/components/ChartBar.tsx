interface DataType {
  name: string;
  time: number;
}

export function ChartBar({ data }: { data: DataType[] }) {
  const sum = data.reduce((result, current) => result + current.time, 0);

  return (
    <div style={{ width: '100%' }}>
      {data.map((item, index) => (
        <div key={index} className="bar">
          <span className="bar-title">{item.name}</span>
          <div style={{ width: '100%', display: 'flex' }}>
            {data.map((item, barIndex) => (
              <div
                key={barIndex}
                style={{
                  width: ((item.time / sum) * 100).toFixed(1) + '%',
                  backgroundColor: index === barIndex ? 'blue' : 'gray',
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
