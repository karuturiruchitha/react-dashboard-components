# React Dashboard Components 📊

Reusable React.js dashboard components built with **Chart.js** — 
designed for enterprise data visualization applications.

Built from real experience developing executive dashboards at 
Prolifics Corporation including Revenue Forecast, MRF, 
Sales Performance, and Services Trajectory dashboards.

## Components

| Component | Description |
|---|---|
| `KPICard` | Metric card with value, label, and trend indicator |
| `BarChart` | Bar chart with dynamic data and color theming |
| `LineChart` | Line chart for trend visualization over time |
| `DataTable` | Sortable, filterable data table with pagination |
| `FilterBar` | Dropdown filters for scope, FY, department |

## Preview

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Revenue    │  │  GM %       │  │  Projects   │
│  $8.4M      │  │  34%        │  │  47 Active  │
│  ↑ 12%      │  │  ↑ 3pts     │  │  ↓ 2 delayed│
└─────────────┘  └─────────────┘  └─────────────┘

┌─────────────────────────────────────────────────┐
│  Revenue by Month (Bar Chart)                   │
│  ████ ████ ████ ████ ████ ████ ████ ████ ████  │
└─────────────────────────────────────────────────┘
```

## Tech Stack

- **React.js** — Component framework
- **Chart.js** — Data visualization
- **CSS3 / SCSS** — Styling

## Usage

```jsx
import KPICard from './components/KPICard';
import BarChart from './components/BarChart';

function Dashboard() {
  return (
    <div>
      <KPICard 
        label="Revenue (YTD)"
        value="$8.4M"
        change="+12%"
        trend="up"
      />
      <BarChart
        title="Monthly Revenue"
        labels={['Jan','Feb','Mar','Apr','May','Jun']}
        data={[3.1, 3.8, 4.2, 3.5, 4.8, 5.1]}
      />
    </div>
  );
}
```

## Author

**Ruchitha Karuturi** — Full Stack Developer  
[LinkedIn](https://linkedin.com/in/ruchitha-karuturi-51a49b24a) | 
[GitHub](https://github.com/karuturiruchitha)
