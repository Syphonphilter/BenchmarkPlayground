import Benchmark from "benchmark";
import { Queries } from '../Benchmarks/Queries'; 
import { MatrixBenchmark } from "../Benchmarks/MatrixBenchmark";

class Program {

  runBenchmark(): void {
    const suite = new Benchmark.Suite();
    const queries = new Queries
    const matixbenchmark = new MatrixBenchmark
    suite
      .add('MatrixMul', function() {
       
       matixbenchmark.run();
        
      })
     
      .on('complete', function (this: any) {
      
        // const memoryUsed = process.memoryUsage().heapUsed / 1024 ;
        // console.log('BenchmarkJS v0.13.11, macOS Sonoma 14.1 (23B73) [Darwin 23.1.0]');
        // console.log('Intel Core i7-9750H CPU 2.60GHz, 1 CPU, 12 logical and 6 physical cores');
        // let program_runtime:string = process.title=='node'?'Node.JS':'Bun.JS'
        // console.log( `${program_runtime}  ${process.version}`);
        // console.log( `${program_runtime} ${process.title}`);
        // console.log(`[Host] : ${program_runtime} ${process.version}, ${process.arch}`);
        // console.log(`DefaultJob : ${program_runtime} ${process.version}, ${process.arch}`);
        
        // console.log('');
        // console.log('| Method         | ArraySize | Mean          | Error      | StdDev     | Allocation    |');
        // console.log('|--------------- |---------- |-------------: |-----------:|------------|---------------|');
        
        // this.forEach((result: { name: string; stats: { sample: string | any[]; mean: number; rme: number; deviation: number; }; }) => {
        //   const methodName = result.name.padEnd(14)
        //   const sampleLength = result.stats.sample.length.toString().padEnd(9)
        //   const mean = (result.stats.mean * 1e9).toFixed(4).padEnd(10)
        //   const error = result.stats.rme.toFixed(4).padStart(8);

        //   const standardDeviation = (result.stats.deviation * 1e9).toFixed(4).padStart(10)
        //   console.log(`| ${methodName} | ${sampleLength} | ${(mean) } ns | ${error} % | ${standardDeviation} |${formatBytes(memoryUsed)}`);
        // });
        // console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
        const benchmark = this.filter('successful')[0];
    const mean = benchmark.stats.mean * 1e6; // Convert to nanoseconds
    const error = benchmark.stats.moe * 1e6; // Convert to nanoseconds
    const stdDev = benchmark.stats.deviation * 1e6; // Convert to nanoseconds
    const gen0 = benchmark.stats.sample.length; // Example: Number of samples
    const allocated = benchmark.stats.sample.length * 100; // Example: Allocated memory

    console.log('| Method           | Mean      | Error    | StdDev   | Gen0 | Allocated |');
    console.log('|------------------|----------:|---------:|---------:|-----:|-----------|');
    console.log(`| Matrix_Benchmark | ${mean.toFixed(1)} ns | ${error.toFixed(2)} ns | ${stdDev.toFixed(2)} ns | ${gen0} | ${allocated} B |`);

      
      })
      .run({ 'async': true });
    
    
  }
 
}

const program = new Program();
program.runBenchmark();

function formatBytes(bytes: number): string {
  const units: string[] = ['B', 'KB', 'MB', 'GB'];
  let index: number = 0;
  while (bytes >= 1024 && index < units.length - 1) {
      bytes /= 1024;
      index++;
  }
  return `${Math.round(bytes * 100) / 100} ${units[index]}`;
}


