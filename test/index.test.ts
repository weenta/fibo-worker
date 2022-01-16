import { fibo } from '../src';

describe('fib', () => {
  it('should return `hello world', () => {
    const actual = fibo('world');

    expect(actual).toEqual('Hello world');
  });
});
