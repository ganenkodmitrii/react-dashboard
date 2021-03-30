import React, { useCallback, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400, color: '#fc7178' },
  // { name: "Group B", value: 300 },
  // { name: "Group C", value: 300 },
  { name: 'Group D', value: 200, color: '#b9b9c3' },
];

export default function Recharts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  return (
    <div className="pie-wrap">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            data={data}
            outerRadius={12}
            innerRadius={8}
            // cx={10}
            // cy={10}
            // fill="red"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {' '}
            {data.map((obj, i) => (
              <Cell key={i} fill={obj.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
