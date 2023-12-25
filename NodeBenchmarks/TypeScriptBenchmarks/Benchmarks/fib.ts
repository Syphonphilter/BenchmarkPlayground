function fibonacci(n: number): number[] {
    const sequence: number[] = [];
    let a = 0, b = 1;
  
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b];
    }
  console.log(sequence)
    return sequence;
  }