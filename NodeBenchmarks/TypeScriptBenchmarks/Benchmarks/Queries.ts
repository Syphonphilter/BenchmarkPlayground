export class Queries{

 withLinqQuery():number[] {
    const array = Array.from({ length: 10 }, (_, i) => i);
    return array.filter(num => num % 2 === 0).map(num => num * 2);
  }
  
  // Method 2: Another method/function to benchmark (replace this with your actual code)
 withLinqSyntax():number[]{
    const array = Array.from({ length: 10 }, (_, i) => i);
    return array
    .filter(num => num % 2 === 0)
      .map(num => num * 2);
 }
  fibonacci(n: number): number[] {
  const sequence: number[] = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
console.log(sequence)
  return sequence;
}
}
