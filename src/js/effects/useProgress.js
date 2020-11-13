import { useEffect, useState } from 'react';

export const useProgress = (
  animate,
  duration,
  repeat
) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      let rafId;
      let start;
      const step = (timestamp) => {
        if (!start) {
          start = timestamp;
        }

        let time = timestamp - start;

        if (time < duration) {
          rafId = requestAnimationFrame(step);
        } else if (repeat) {
          time = time % duration;
          rafId = requestAnimationFrame(step);
        } else {
          time = duration;
        }

        setProgress(time / duration);
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  }, [animate, duration]);

  return [progress, setProgress];
};
