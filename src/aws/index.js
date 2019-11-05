const generate = require('../generate-random-array');
const process = require('../process');
const lambda = require('./lambda');

main();

async function main() {
    const array = generate({ size: 100 });
    const chunk = 10
    console.log("Processing array with 100 elements on aws lambda");
    let allResponses = await process({ array, lambda, chunk });
    console.log(`Showing 10 of ${allResponses.length} elements: `, allResponses.slice(0, 10));
}
