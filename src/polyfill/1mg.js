
//////////////////////////////////////////////////////////////////////////////////////  


const input = {
    a: [1, 2, 3],
    b: {
        c: 4,
        d: 5,
        e: 5,
        f: [1, 3, 4]
    }
}

// Write a function that flattens the above input as below

// output = [ a_1, a_2, a_3, b_c_4, b_d_5, b_e_5, b_f_1,  b_f_3, b_f_4 ];


// {} => [], 
// {a:3}
// 
let res = []
function getFlat(res, input, key) {

    if (!Array.isArray(input) && Object.keys(input).length === 0) {
        return res
    }
    else if (!Array.isArray(input) && Object.keys(input).length !== 0) {
        let keys = Object.keys(input)

        keys.forEach((e, i) => {
            if (Array.isArray(input[e])) {
                input[e].forEach((av) => {
                    if (key != undefined) {
                        res.push(`${key}_${e}_${av}`)
                    } else {
                        res.push(`${e}_${av}`)
                    }
                })
            } else if (typeof input[e] === "object") {
                getFlat(res, input[e], e)
            } else {
                if (key != undefined) {
                    res.push(`${key}_${e}_${input[e]}`)
                } else {
                    res.push(`${e}_${input[e]}`)
                }
            }
        })

        return res
    }
}

let key
let test = { a: 0, b: 8, c: [2, 3] }
console.log(getFlat(res, test, key))




















// Question - Given an array find pairs such that they sums to a given number.

// Array [6, 2, 4, 8, 5]
// Num 10


























