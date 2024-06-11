import { delay } from "../index";

describe("Utils", () => {
  describe("delay", () => {
    jest.useFakeTimers();

    it("resolves after the specified duration", () => {
      const duration = 1000; // 1 second
      const promise = delay(duration);

      // Fast-forward until all timers have been executed
      jest.advanceTimersByTime(duration);

      return expect(promise).resolves.toBeUndefined();
    });

    it("resolves after multiple durations", () => {
      const duration1 = 500; // 0.5 seconds
      const duration2 = 1500; // 1.5 seconds

      const promise1 = delay(duration1);
      const promise2 = delay(duration2);

      // Fast-forward until the first timer has been executed
      jest.advanceTimersByTime(duration1);
      expect(promise1).resolves.toBeUndefined();

      // Fast-forward until the second timer has been executed
      jest.advanceTimersByTime(duration2 - duration1);
      return expect(promise2).resolves.toBeUndefined();
    });
  });
});
