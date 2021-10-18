

let out = {}
function deepClone(out, input) {
    if (!input || typeof input !== "object") {
        // if input is null or undefined
        return input
    }
    if (!Array.isArray(input) && Object.keys(input).length === 0) {
        // if input is an object and dont have any keys
        return out
    } else {
        let keys = Object.keys(input)
        keys.forEach(k => {
            let objValue = input[k]
            if (Array.isArray(objValue)) {
                // if the value on the key is an Array of "non array and object" vlaues 
                out[`${k}`] = []

                objValue.forEach(v => {
                    if (Array.isArray(v)) {
                        out[`${k}`].push(deepClone([], v))
                    } else {
                        out[`${k}`].push(deepClone({}, v))
                    }
                })


            } else if (!Array.isArray(objValue) && Object.keys(objValue).length > 0) {
                // if value on the key is an object
                out[`${k}`] = deepClone({}, objValue)
            } else {
                // if it is primitive type values
                out[`${k}`] = objValue
            }

        })

        return out
    }

}

let test1 = { a: { b: { c: { d: 4 } } } }
let test2 = { a: [1, 2, 3], b: [{ name: "Subodh" }, { name: "Haria" }] }

let test3 = undefined
let test4 = null

let test5 = {
    a: [1, 2, 3],
    b: {
        c: 4,
        d: 5,
        e: 5,
        f: [1, 3, 4]
    }
}

let test6 = { a: [[1, 2], [3, 5, [1111, [222, [3333]]]]] }


let test7 = {
    a: [
        1,
        2,
        {
            b: 3,
            c: [{ d: 4 }, { e: 9 }]
        }
    ]
}


let b = deepClone({}, test7)


console.log(JSON.stringify(b))