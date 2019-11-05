async function lambda(array) {
        return array.filter(elem =>
            (elem.x && elem.y && elem.z && elem.z > 10)
        )
}

module.exports = lambda;