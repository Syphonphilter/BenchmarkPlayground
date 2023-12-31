import axios, { AxiosResponse } from 'axios';

async function simulateHTTPRequests(endpoint: string, numberOfRequests: number): Promise<string> {
    const startTime = Date.now();
    let completedRequests = 0;
    let failedRequests = 0;

    // Simulate making HTTP requests concurrently
    const promises = Array.from({ length: numberOfRequests }, async () => {
        try {
            const response: AxiosResponse = await axios.get(endpoint);
            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
        
            //console.log('Response:', response.data);
            //console.log(`Time taken to get response: ${elapsedTime}ms`);
            completedRequests++;
          } catch (error) {
            console.error('Error fetching data:', error);
            completedRequests++;
          }
    });

    await Promise.all(promises);

    const endTime = Date.now();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    const requestsPerSecond = completedRequests / elapsedTimeInSeconds;
    
    return `ok ${completedRequests}, bad ${failedRequests} for ${numberOfRequests} at ${requestsPerSecond} r/s` ;
}
simulateHTTPRequests('https://jsonplaceholder.typicode.com/posts', 100).then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

