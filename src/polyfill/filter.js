

let arr = [1, 2, 3, 4, 5]

let b = arr.filter((e, i) => { return e > 3 })

console.log(b)


let myFilter = function () {
    console.log(this)
}


Array.prototype.myFilter = myFilter

arr.myFilter()

myFilter()

