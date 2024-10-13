import { TrashBin } from '../components/TrashBinDashboard';

const mockData: TrashBin[] = [
  { id: 'BKK', location: 'กรุงเทพมหานคร', fillLevel: Math.floor(Math.random() * 100), lat: 13.7563, lng: 100.5018 },
  { id: 'CNX', location: 'เชียงใหม่', fillLevel: Math.floor(Math.random() * 100), lat: 18.7883, lng: 98.9853 },
  { id: 'PKT', location: 'ภูเก็ต', fillLevel: Math.floor(Math.random() * 100), lat: 7.9519, lng: 98.3381 },
  { id: 'KKN', location: 'ขอนแก่น', fillLevel: Math.floor(Math.random() * 100), lat: 16.4419, lng: 102.8350 },
  { id: 'HDY', location: 'หาดใหญ่', fillLevel: Math.floor(Math.random() * 100), lat: 6.9969, lng: 100.5014 },
  { id: 'PTE', location: 'ประจวบคีรีขันธ์', fillLevel: Math.floor(Math.random() * 100), lat: 11.8120, lng: 99.7976 },
  { id: 'UBN', location: 'อุบลราชธานี', fillLevel: Math.floor(Math.random() * 100), lat: 15.2442, lng: 104.8472 },
  { id: 'NKT', location: 'นครราชสีมา', fillLevel: Math.floor(Math.random() * 100), lat: 14.9799, lng: 102.0977 },
  { id: 'SUR', location: 'สุราษฎร์ธานี', fillLevel: Math.floor(Math.random() * 100), lat: 9.1382, lng: 99.3215 },
  { id: 'UTT', location: 'อุตรดิตถ์', fillLevel: Math.floor(Math.random() * 100), lat: 17.6200, lng: 100.0993 }
];

export default mockData;
