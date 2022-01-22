import fibo from '../src';

describe('fib', () => {
  it.each`
    num | expected
    ${1} | ${1}
    ${2} | ${1}
    ${3} | ${2}
  `('return $expected given num is $num', ({ num, expected }) => {
    const actual = fibo(num);
    expect(actual).toBe(expected);
  });
});
