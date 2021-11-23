
// Question - Given an array find pairs such that they sums to a given number.

// Array [6, 2, 4, 8, 5]
// Num 10



function findPairs(arr, num) {

    let a = {}
    arr.forEach(e => a[e] = 0)
    let pair = []
    for (key in a) {
        a[key] = num - key
        pair.push([Number(key), num - key])
    }
    console.table(a)
    return pair
}
let arr = [6, 2, 4, 8, 5]
console.log(findPairs(arr, 10))


