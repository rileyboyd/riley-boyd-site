export const debounce = <T extends (...args: Parameters<T>) => void>(
  fn: T,
  wait = 20
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>

  return function (...args: Parameters<T>) {
    // type args based on the function signature
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => fn(...args), wait)
  }
}
