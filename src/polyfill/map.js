

let arr = [1, 2, 3, 4]


// let a = arr.map()

let cb = (el, i) => {
    return 4 * el
}

function myMap(cb) {
    let op = []
    this.forEach((el, i) => {
        op.push(cb(el, i))
    })
    return op
}

Array.prototype.myMap = myMap

let mympaOp = arr.myMap((el, i) => {
    return { [`${i}`]: el }
})

console.log(mympaOp)