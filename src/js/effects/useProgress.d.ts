export const useProgress: (
  animate: boolean,
  duration: number,
  repeat?: boolean
) => [number, (progress: number) => void];
