import React from 'react';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';

const GrothChartWidget = ({
  data = [],
  startColor,
  endColor,
  strokeColor,
  type,
  colorID = 'color1',
  dataKey = 'value',
}) => (
  <ResponsiveContainer width="100%" height={103}>
    <AreaChart
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Tooltip />
      <defs>
        <linearGradient id={colorID} x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor={startColor} stopOpacity={0.8} />
          <stop offset="95%" stopColor={endColor} stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <Area
        dataKey={dataKey}
        type={type}
        strokeWidth={0}
        stackId="2"
        stroke={strokeColor}
        fill={`url(#${colorID})`}
        fillOpacity={1}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default GrothChartWidget;
