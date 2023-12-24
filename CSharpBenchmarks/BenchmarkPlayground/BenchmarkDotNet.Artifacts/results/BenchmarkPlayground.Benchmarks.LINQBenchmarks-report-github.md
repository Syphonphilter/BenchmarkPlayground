```

BenchmarkDotNet v0.13.11, macOS Sonoma 14.1 (23B73) [Darwin 23.1.0]
Intel Core i7-9750H CPU 2.60GHz, 1 CPU, 12 logical and 6 physical cores
.NET SDK 8.0.100
  [Host]     : .NET 8.0.0 (8.0.23.53103), X64 RyuJIT AVX2
  DefaultJob : .NET 8.0.0 (8.0.23.53103), X64 RyuJIT AVX2


```
| Method           | Mean     | Error    | StdDev   | Gen0   | Allocated |
|----------------- |---------:|---------:|---------:|-------:|----------:|
| GenerateSequence | 77.12 ns | 0.589 ns | 0.551 ns | 0.0293 |     184 B |
