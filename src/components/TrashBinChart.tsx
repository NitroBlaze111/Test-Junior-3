import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { TrashBin } from './TrashBinDashboard';

interface TrashBinChartProps {
  bins: TrashBin[];
}

const TrashBinChart: React.FC<TrashBinChartProps> = ({ bins }) => {

  const getFillColor = (fillLevel: number) => {
    if (fillLevel > 80) {
      return '#ff4c4c'; // สีแดงเมื่อขยะเกิน 80%
    } else if (fillLevel > 50) {
      return '#ffcc00'; // สีเหลืองเมื่อขยะเกิน 50%
    } else {
      return '#66cc66'; // สีเขียวเมื่อขยะน้อยกว่า 50%
    }
  };

  return (
    <BarChart width={600} height={300} data={bins}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="location" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="fillLevel">
        {bins.map((bin) => (
          <Cell key={bin.id} fill={getFillColor(bin.fillLevel)} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default TrashBinChart;
