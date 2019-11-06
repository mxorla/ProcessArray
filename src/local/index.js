const generate = require('../generate-random-array');
const process = require('../process');
const lambda = require('./lambda');

main();

async function main() {
    const array = generate({ size: 10000000 });
    const chunk = 10000;
    console.log("Processing array with 10 millions elements on local");
    const allResponses = await process({ array, lambda, chunk });
    console.log(`Showing 10 of ${allResponses.length} elements: `, allResponses.slice(0, 10));
}
