import React from 'react';

export const Grid = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(0, min-content))',
      gap: '12px',
      margin: '8px 0',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export default Grid;
