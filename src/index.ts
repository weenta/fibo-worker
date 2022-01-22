const fibo = (num: number) : number => {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibo(num - 1) + fibo(num - 2);
};

export default fibo;
