# Component Documentation

## KPICard
Shows a single KPI metric with trend indicator.

**Props:**
- `label` — metric name (string)
- `value` — display value (string)
- `change` — change amount (string)
- `trend` — "up" or "down" (string)

## BarChart
Bar chart using Chart.js.

**Props:**
- `title` — chart title (string)
- `labels` — x-axis labels (array)
- `data` — numeric values (array)
- `color` — bar color hex (string, optional)

## LineChart
Line chart with area fill.

**Props:**
- `title` — chart title (string)
- `labels` — x-axis labels (array)
- `data` — numeric values (array)
- `color` — line color hex (string, optional)

## DataTable
Sortable, paginated data table.

**Props:**
- `columns` — array of `{key, label}` objects
- `rows` — array of data objects
- `pageSize` — rows per page (number, default 10)

## FilterBar
Dropdown filter row.

**Props:**
- `filters` — array of `{key, label, options}` objects
- `values` — current selected values object
- `onChange` — callback `(key, value) => void`
