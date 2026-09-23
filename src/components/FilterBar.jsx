import React from 'react';

const FilterBar = ({ filters, values, onChange }) => {
  return (
    <div style={styles.bar}>
      {filters.map(filter => (
        <select
          key={filter.key}
          value={values[filter.key] || ''}
          onChange={e => onChange(filter.key, e.target.value)}
          style={styles.select}
        >
          <option value="">{filter.label}</option>
          {filter.options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

const styles = {
  bar: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '16px 0'
  },
  select: {
    padding: '8px 14px',
    border: '1px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#334155',
    background: '#ffffff',
    cursor: 'pointer',
    outline: 'none'
  }
};

export default FilterBar;
