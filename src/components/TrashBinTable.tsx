import React from 'react';
import { TrashBin } from './TrashBinDashboard';

interface TrashBinTableProps {
  bins: TrashBin[];
  sortConfig: {key: keyof TrashBin, direction: 'asc' | 'desc'};
  handleSort: (key: keyof TrashBin) => void;
}

const TrashBinTable: React.FC<TrashBinTableProps> = ({ bins, sortConfig, handleSort }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th
            onClick={() => handleSort('id')}
            style={{ border: '1px solid #ddd', padding: '8px', cursor: 'pointer' }}
          >
            ID {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
          </th>
          <th
            onClick={() => handleSort('location')}
            style={{ border: '1px solid #ddd', padding: '8px', cursor: 'pointer' }}
          >
            Location {sortConfig.key === 'location' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
          </th>
          <th
            onClick={() => handleSort('fillLevel')}
            style={{ border: '1px solid #ddd', padding: '8px', cursor: 'pointer' }}
          >
            Fill Level {sortConfig.key === 'fillLevel' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
          </th>
        </tr>
      </thead>
      <tbody>
        {bins.map((bin) => (
          <tr
            key={bin.id}
            style={{
              backgroundColor: bin.fillLevel > 80 ? '#ffcccc' : 'inherit',
              border: '1px solid #ddd',
            }}
          >
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bin.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bin.location}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{bin.fillLevel}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrashBinTable;
