function fibonacci(num: number) {
    const fibSquence: number[] = [0, 1];
  
    while (fibSquence[fibSquence.length - 1] < num) {
      const nextSequence =
        fibSquence[fibSquence.length - 1] + fibSquence[fibSquence.length - 2];
      fibSquence.push(nextSequence);
    }
  
    if (fibSquence.includes(num)) {
      console.log('é fibonacci');
    } else {
      console.log('não é fibonacci');
    }
  }
  
  fibonacci(1597);
  