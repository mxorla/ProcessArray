
async function processHugeArray(params) {
    const array = params.array || [];
    const lambda = params.lambda;
    const chunk = params.chunk;
    const size = array.length;
    const workers = Math.trunc(size / chunk) + 1;

    let result = [];
    for (let i = 0; i < workers; i++) {
        result.push(
            ... await lambda(array.slice(i * chunk, (i + 1) * chunk))
        );
    }

    return result;
}

module.exports = processHugeArray;