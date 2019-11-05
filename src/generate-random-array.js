
function generateRandomArray(params) {
    const size = params.size;

    let obj = undefined;
    let arr = [];

    for (let i = 0; i < size; i++) {
        const val = Math.random();
        const multiplier = Math.random() * 100;
        if (val > 0.1) {
            obj = {
                x: val,
                y: val,
                z: val * multiplier
            };
        } else {
            obj = { cualquiera: "esto es cualquiera" };
        }
        arr.push(obj);
    }

    return arr;
}

module.exports = generateRandomArray;