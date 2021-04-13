// run after the last invoke in wait time
const debounce = (fn: () => void, wait: number): (() => void) => {
  let timeout: number | null = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, wait);
  };
};
