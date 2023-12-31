import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { forEach } from 'benchmark';

async function simulateHTTPRequests(endpoint: string, numberOfRequests: number): Promise<string> {
    const startTime = Date.now();
    let completedRequests = 0;
  let failedRequests = 0;
  let rps:number[] = []
  for (let i = 0; i < numberOfRequests; i++) {
    // Simulate making HTTP requests concurrently
    const promises = Array.from({ length: numberOfRequests }, async () => {
      try {
        await axios.get(endpoint).then((res) => {
          res.status === HttpStatusCode.Ok ? completedRequests++ : failedRequests++
        });
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        
        //console.log('Response:', response.data);
        //console.log(`Time taken to get response: ${elapsedTime}ms`);
           
      } catch (error) {
        // console.error('Error fetching data:', error);
        failedRequests++;
      }
    });

    await Promise.all(promises);

    const endTime = Date.now();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    const requestsPerSecond = completedRequests / elapsedTimeInSeconds;
    console.log(requestsPerSecond)
    rps.push(requestsPerSecond)
  }

    return `ok ${completedRequests}, bad ${failedRequests} for ${completedRequests+failedRequests} at mean of ${calculateAverage(rps)} r/s and Max of ${Math.max(...rps)}` ;
}
function calculateAverage(numbers: number[]): number {
  const sum: number = numbers.reduce((acc: number, curr: number) => acc + curr, 0);
  return sum / numbers.length;
}


async function runRequestsBun(port:number) {
  try {
    const resultBun = await simulateHTTPRequests(`http://localhost:${port}/weather/getWeather`, 20);
    console.log(resultBun + ' for Bun');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

async function runRequestsDotNet() {
  try {
    const resultDotNet = await simulateHTTPRequests('http://localhost:5298/Weather/getWeather', 20);
    console.log(resultDotNet + ' for .NET');
  } catch (error) {
    console.error('Error:', error);
  }
}
const nodePort = 8787;
const bunPort=8989
runRequestsBun(bunPort)

