import { debounce } from "./debounce";

jest.useFakeTimers(); // This enables fake timers for controlling setTimeout in tests

describe("debounce function", () => {
  const mockFn = jest.fn();

  // Test case 1: Verify that the debounced function only executes after the specified wait time
  it("should call the debounced function after the specified wait time", () => {
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn("test");

    // Check that the function has not been called yet (debounced function is delayed)
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward timers by 300ms (so the debounced function should execute)
    jest.advanceTimersByTime(300);

    // Now the debounced function should have been called
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  // Test case 2: Verify that repeated calls cancel the previous ones
  it("should cancel the previous call if the debounced function is called repeatedly", () => {
    const debouncedFn = debounce(mockFn, 300);

    // Call the debounced function multiple times in quick succession
    debouncedFn("first");
    debouncedFn("second");
    debouncedFn("third");

    // Check that the function has not been called yet (debounced)
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward timers by 300ms
    jest.advanceTimersByTime(300);

    // The mock function should only have been called once, with the latest argument
    expect(mockFn).toHaveBeenCalledWith("third");
  });

  // Test case 3: Verify that the debounced function is executed with the correct arguments
  it("should pass the correct arguments to the original function", () => {
    const debouncedFn = debounce(mockFn, 300);

    // Call the debounced function with multiple arguments
    debouncedFn("hello", 42);

    // Fast-forward timers by 300ms
    jest.advanceTimersByTime(300);

    // The mock function should have been called with the correct arguments
    expect(mockFn).toHaveBeenCalledWith("hello", 42);
  });

  // Test case 4: Verify that the debounced function is not called immediately (default behavior)
  it("should not call the function immediately by default", () => {
    const debouncedFn = debounce(mockFn, 300);

    // Call the debounced function
    debouncedFn("immediate");

    // The mock function should not have been called yet
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward timers by 300ms
    jest.advanceTimersByTime(300);

    // Now the mock function should have been called
    expect(mockFn).toHaveBeenCalledWith("immediate");
  });
});
