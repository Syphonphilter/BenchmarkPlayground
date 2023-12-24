using System.Numerics;
using BenchmarkDotNet.Attributes;
using BenchmarkPlayground.Functions;

namespace BenchmarkPlayground.Benchmarks
{
    [MemoryDiagnoser]
    public class MatrixBenchmarks
    {
        [Benchmark]
        public int[,] Matrix_Benchmark()
        {
            BenchmarkFunctions functions = new BenchmarkFunctions();
            Random random = new Random();
            int rows = random.Next(1, 5);
            int cols = random.Next(1, 5);

            int[,] matrix1 = new int[rows, cols];
            int[,] matrix2 = new int[cols, rows];

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    matrix1[i, j] = random.Next(1, 10);
                    matrix2[j, i] = random.Next(1, 10);
                }
            }

            return functions.MultiplyMatrices(matrix1, matrix2);

        }


    }
}