import React, { useState } from 'react';

const DataTable = ({ columns, rows, pageSize = 10 }) => {
  const [page, setPage] = useState(0);
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const handleSort = (col) => {
    if (sortCol === col) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  };

  const sorted = [...rows].sort((a, b) => {
    if (!sortCol) return 0;
    return sortDir === 'asc'
      ? String(a[sortCol]).localeCompare(String(b[sortCol]))
      : String(b[sortCol]).localeCompare(String(a[sortCol]));
  });

  const paginated = sorted.slice(page * pageSize, (page + 1) * pageSize);
  const totalPages = Math.ceil(rows.length / pageSize);

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={styles.th}
                onClick={() => handleSort(col.key)}
              >
                {col.label} {sortCol === col.key ? (sortDir === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((row, i) => (
            <tr key={i} style={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              {columns.map(col => (
                <td key={col.key} style={styles.td}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>
          Previous
        </button>
        <span>Page {page + 1} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { padding: '12px 16px', textAlign: 'left', background: '#F8FAFC', fontSize: '12px', fontWeight: '700', color: '#64748B', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' },
  td: { padding: '12px 16px', fontSize: '14px', color: '#334155', borderTop: '1px solid #F1F5F9' },
  rowEven: { background: '#ffffff' },
  rowOdd: { background: '#F8FAFC' },
  pagination: { display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', padding: '16px', borderTop: '1px solid #F1F5F9' }
};

export default DataTable;
