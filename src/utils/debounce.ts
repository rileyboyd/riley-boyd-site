export const debounce = <T extends (...args: any[]) => void>(
  fn: Function,
  wait = 20
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};
