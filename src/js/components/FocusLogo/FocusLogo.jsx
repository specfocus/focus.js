import React, { useMemo } from 'react';

export const FocusLogo = ({
  color = 'rgb(216, 216, 216)',
  height = 200,
  rotation,
  translation,
  width = 200
}) => {
  const style = useMemo(() => ({
    fill: color,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '0px',
    vectorEffect: 'non-scaling-stroke'
  }), [color]);
  const left = useMemo(() => `
    M 150 50 L 150 200 L 350 200 C 350 175 315 150 300 150 L 200 150 L 200 0 C 180 0 150 35 150 50 Z
  `, []);
  const right = useMemo(() => `
    M 0 200 L 0 350 L 200 350 C 200 325 165 300 150 300 L 50 300 L 50 150 C 30 150 0 185 0 200 Z
  `, []);
  const rotate = useMemo(() => `rotate(${rotation * 360} 175 175)`, [rotation]);
  const [lt, rt] = useMemo(() => {
    const d = (1 - translation) * 100;
    return [
      `translate(${-d} ${d})`,
      `matrix(-1 0 0 -1 ${200 + d} ${500 - d})`
    ];
  }, [translation]);
  return (
    <svg
      height={height}
      viewBox="0 0 350 350"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g transform={rotate}>
        <path style={style} d={left} transform={lt}></path>
        <path style={style} d={right} transform={rt}></path>
      </g>
    </svg>
  );
};

FocusLogo.defaultProps = {
  rotation: 0,
  translation: 0
};