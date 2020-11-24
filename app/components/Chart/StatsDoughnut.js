import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import PropTypes from 'prop-types';

function StatsDoughnut({ data, count, label, fill }) {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={80}
        startAngle={90}
        endAngle={-270}
        fill={fill}
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

StatsDoughnut.propTypes = {
  data: PropTypes.any,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  fill: PropTypes.string,
};
StatsDoughnut.defaultProps = {
  data: [],
  count: 0,
  label: '-',
  fill: '#8884d8',
};

export default StatsDoughnut;
