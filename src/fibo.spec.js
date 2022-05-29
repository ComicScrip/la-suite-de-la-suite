import fib from "./fibo";

const cache = {};
const fibo = (n) => {
  if (!cache[n]) cache[n] = fib(n);
  return cache[n];
};

describe("fibonacci", () => {
  it("works with small n", () => {
    expect(fibo(0)).toBe(0);
    expect(fibo(1)).toBe(1);
    expect(fibo(2)).toBe(1);
    expect(fibo(3)).toBe(2);
    expect(fibo(4)).toBe(3);
    expect(fibo(5)).toBe(5);
    expect(fibo(6)).toBe(8);
    expect(fibo(7)).toBe(13);
    expect(fibo(8)).toBe(21);
    expect(fibo(9)).toBe(34);
    expect(fibo(10)).toBe(55);
  });

  it("works with medium n", () => {
    expect(fibo(20)).toBe(6765);
    expect(fibo(30)).toBe(832040);
    expect(fibo(40)).toBe(102334155);
    expect(fibo(45)).toBe(102334155);
  });
});
