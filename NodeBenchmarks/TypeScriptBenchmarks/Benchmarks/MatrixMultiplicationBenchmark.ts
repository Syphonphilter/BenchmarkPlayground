import{BenchmarkFunctions} from '../../Functions/BenchmarkFunctions'
export class MatrixMultiplicationBenchmark{

    run(): number[][] {
        const benchmarkFunction = new BenchmarkFunctions;
        // Function to generate a random integer between min (inclusive) and max (inclusive
        let rows:number = getRandomInt(1, 5);
        let cols: number = getRandomInt(1, 5);
        let matrix1: number[][] = [];
        let matrix2: number[][] = [];
        //Popuate Matrix
        for (let i = 0; i < rows; i++) {
            matrix1.push([]);
            for (let j = 0; j < cols; j++) {
               
                const rand1: number = getRandomInt(1, 10);
                const rand2: number = getRandomInt(1, 10);
                matrix1[i][j] = rand1; 
                if (!matrix2[j]) {
                    matrix2[j] = []; 
                }
                matrix2[j][i] = rand2; 
            }
        }
        console.log('here')
        return benchmarkFunction.multiplyMatricies(matrix1, matrix2)
    }
}
const matixbenchmark = new MatrixMultiplicationBenchmark()
matixbenchmark.run()
function getRandomInt(min: number, max: number):number {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
