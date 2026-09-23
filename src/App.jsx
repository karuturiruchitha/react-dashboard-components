import React, { useState } from 'react';
import KPICard from './components/KPICard';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DataTable from './components/DataTable';
import FilterBar from './components/FilterBar';

const FILTERS = [
  {
    key: 'fy',
    label: 'All FY',
    options: [
      { value: 'FY2025', label: 'FY 2025' },
      { value: 'FY2026', label: 'FY 2026' }
    ]
  },
  {
    key: 'scope',
    label: 'All Services',
    options: [
      { value: 'enterprise', label: 'Enterprise Solutions' },
      { value: 'cloud', label: 'Cloud Services' },
      { value: 'data', label: 'Data & AI' }
    ]
  }
];

const TABLE_COLUMNS = [
  { key: 'project', label: 'Project' },
  { key: 'revenue', label: 'Revenue' },
  { key: 'gm', label: 'GM %' },
  { key: 'status', label: 'Status' }
];

const TABLE_DATA = [
  { project: 'Alpha', revenue: '$1.2M', gm: '42%', status: 'On Track' },
  { project: 'Beta', revenue: '$890K', gm: '38%', status: 'At Risk' },
  { project: 'Gamma', revenue: '$650K', gm: '51%', status: 'On Track' },
  { project: 'Delta', revenue: '$420K', gm: '28%', status: 'Delayed' }
];

export default function App() {
  const [filters, setFilters] = useState({});

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ padding: '32px', background: '#F8FAFC', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0D1B2A', marginBottom: '8px' }}>
        Executive Dashboard
      </h1>
      <p style={{ color: '#94A3B8', marginBottom: '24px' }}>
        React Dashboard Components Demo
      </p>

      <FilterBar filters={FILTERS} values={filters} onChange={handleFilter} />

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <KPICard label="Revenue (YTD)" value="$8.4M" change="12%" trend="up" />
        <KPICard label="Gross Margin %" value="34%" change="3pts" trend="up" />
        <KPICard label="Active Projects" value="47" change="2 delayed" trend="down" />
        <KPICard label="Client Satisfaction" value="96%" change="2%" trend="up" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <BarChart
          title="Monthly Revenue ($M)"
          labels={['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']}
          data={[3.1, 3.8, 4.2, 3.5, 4.8, 5.1, 4.6, 5.3, 6.1]}
        />
        <LineChart
          title="GM % Trend"
          labels={['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']}
          data={[28, 30, 32, 29, 34, 36, 33, 35, 38]}
          color="#10B981"
        />
      </div>

      <DataTable columns={TABLE_COLUMNS} rows={TABLE_DATA} pageSize={5} />
    </div>
  );
}
