import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import PropTypes from 'prop-types';

function Doughnut({ data, count, label }) {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        <Label
          value={count}
          position="centerBottom"
          className="doughnut-label-top"
        />
        <Label
          value={label}
          position="centerTop"
          className="doughnut-label-bottom"
        />
        {data.map(val => (
          <Cell
            key={val.key}
            fill={val.key === 'offline' ? '#d4d4d4' : '#55C48B'}
          />
        ))}
      </Pie>
    </PieChart>
  );
}

Doughnut.propTypes = {
  data: PropTypes.any,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
};
Doughnut.defaultProps = {
  data: [],
  count: 0,
  label: '-',
};

export default Doughnut;
