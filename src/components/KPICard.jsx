import React from 'react';

const KPICard = ({ label, value, change, trend }) => {
  const trendColor = trend === 'up' ? '#10B981' : '#EF4444';
  const trendIcon = trend === 'up' ? '↑' : '↓';

  return (
    <div style={styles.card}>
      <div style={styles.label}>{label}</div>
      <div style={styles.value}>{value}</div>
      <div style={{ ...styles.change, color: trendColor }}>
        {trendIcon} {change}
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#ffffff',
    border: '1px solid #E2E8F0',
    borderRadius: '12px',
    padding: '20px',
    minWidth: '200px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
  },
  label: {
    fontSize: '12px',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '8px'
  },
  value: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0D1B2A',
    marginBottom: '6px'
  },
  change: {
    fontSize: '13px',
    fontWeight: '600'
  }
};

export default KPICard;
