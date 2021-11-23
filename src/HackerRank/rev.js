function reverseArray(a) {
    // Write your code here

    let len = a.length - 1
    let b = []
    console.log(a, len)
    for (let i = len; i >= 0; i--) {
        b.push(a[i])
        console.log(a[i])
    }
    return b
}

reverseArray([1, 2, 3, 4])