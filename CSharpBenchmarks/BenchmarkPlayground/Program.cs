// See https://aka.ms/new-console-template for more information
using BenchmarkDotNet.Running;
using BenchmarkPlayground.Benchmarks;

public class Program
{
    public static void Main(string[] args)
    {
        BenchmarkRunner.Run<LINQBenchmarks>();
    }
}
