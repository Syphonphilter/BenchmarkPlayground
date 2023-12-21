using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Jobs;

namespace BenchmarkPlayground.Benchmarks
{
    [SimpleJob(RuntimeMoniker.Net80, baseline: true)]
    [SimpleJob(RuntimeMoniker.NativeAot80)]
    [RPlotExporter]
    public class LINQBenchmarks
    {
        public int[] counts { get; private set; }

        [Params(100, 1000)] // Change the array size based on the benchmark scenario
        public int ArraySize { get; set; }

        [GlobalSetup]
        public void GlobalSetup()
        {
            // Initialize the counts array with random numbers or any desired logic
            Random random = new Random();
            counts = Enumerable.Range(1, ArraySize).Select(_ => random.Next(1, 100)).ToArray();
        }

        [Benchmark]
        public void withLinqQuery()
        {

            IEnumerable<int> countQuery =
            from count in counts
            where count > 20
            orderby count descending
            select count;

        }
        [Benchmark]
        public void withLinqSyntax()
        {
            counts = this.counts;
            var countQuery = counts.Where(c => c > 20).OrderByDescending(c => c);

        }
    }
}