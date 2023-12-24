using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Columns;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Diagnosers;
using BenchmarkDotNet.Jobs;
using BenchmarkDotNet.Running;
using System;
using BenchmarkPlayground.Benchmarks;

public class Program
{
    public static void Main(string[] args)
    {


        var benchmark = BenchmarkRunner.Run<MatrixBenchmarks>();
        // Access the Ops/s metric from the summary
        double opsPerSecond = benchmark.Reports[0].ResultStatistics.Mean; // Ops/s is usually stored in the Mean property

        double benchmarkTimeSeconds = benchmark.Reports[0].ResultStatistics.Mean / 1000; // Mean time in milliseconds converted to seconds

        // Calculate the total operations executed
        double totalOperations = opsPerSecond * benchmarkTimeSeconds;

        // Display total operations
        Console.WriteLine($"Total operations executed: {totalOperations}");

    }
}
