const generate = require('../generate-random-array');
 
main();

async function main() {
    const array = generate({ size: 5 });

    console.log("Processing array with 5 elements without concurency");
    const result = array.filter(c=> c.hasOwnProperty("x") && c.hasOwnProperty("y") && c.hasOwnProperty("z") && c.z > 10)
    console.log("Response elements: ", result);
}