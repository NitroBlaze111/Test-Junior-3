import React, { useState, useEffect } from 'react';
import mockData from '../data/trashBinMockData';
import TrashBinChart from './TrashBinChart';
import TrashBinMap from './TrashBinMap';
import TrashBinTable from './TrashBinTable';
import './TrashBinDashboard.css'; 

export interface TrashBin {
  id: string;
  location: string;
  fillLevel: number;
  lat: number;
  lng: number;
}

const TrashBinDashboard: React.FC = () => {
  const [bins, setBins] = useState<TrashBin[]>([]);
  const [filteredBins, setFilteredBins] = useState<TrashBin[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{key: keyof TrashBin, direction: 'asc' | 'desc'}>({key: 'id', direction: 'asc'});

  useEffect(() => {
    setBins(mockData);
    setFilteredBins(mockData);
  }, []);

  useEffect(() => {
    const filtered = bins.filter(bin => 
      bin.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sorted = [...filtered].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredBins(sorted);
  }, [bins, searchTerm, sortConfig]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key: keyof TrashBin) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div>
      <h1>Trash Bin Dashboard</h1>
      <input
        type="text"
        placeholder="Search by location"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="dashboard-container">
        <TrashBinTable bins={filteredBins} sortConfig={sortConfig} handleSort={handleSort} />
        <div className="chart-container">
          <TrashBinChart bins={filteredBins} />
        </div>
        <div className="map-container">
          <TrashBinMap bins={filteredBins} />
        </div>
      </div>
    </div>
  );
};

export default TrashBinDashboard;
