import React, { useEffect, useMemo, useState } from 'react';
import { FocusLogo } from './FocusLogo';
import { useProgress } from '../../effects/useProgress';

const SPINS = 3;
const DURATION = 2 * 1000;
const LOOPS = 1 + SPINS + 1 + 1;
const COMPLETION = LOOPS * DURATION;
const LOOP = 1 / LOOPS;

export const FocusAnimation = ({ active, ...props }) => {
  const [state, setState] = useState(-1);
  const [[rotation, translation], setTransform] = useState([0, 0]);
  const [progress] = useProgress(active || state > -1, COMPLETION, active);
  useEffect(() => {
    const loop = Math.trunc(progress / LOOP);
    const p = progress - loop * LOOP;
    const delta = p * LOOPS;
    if (loop !== state) {
      if (loop < SPINS) {
        console.log('INC', loop);
        setState(loop);
      } else if (active) {
        console.log('CONTINUE');
        setState(0);
      } else {
        console.log('STOP');
        setState(-1);
      }
    }
    if (progress === 1) {
      // reset
      setTransform([0, 0]);
    } else if (loop === 0) {
      // collapsing
      setTransform([delta, delta]);
    } else if (loop === LOOPS - 2) {
      // expanding
      setTransform([delta, 1 - delta]);
    } else if (loop === LOOPS - 1) {
      // stay expanded
      setTransform([0, 0]);
    } else {
      // spin
      setTransform([delta, 1]);
    }
  }, [active, progress]);
  return (
    <FocusLogo {...props} rotation={rotation} translation={translation} />
  );
};