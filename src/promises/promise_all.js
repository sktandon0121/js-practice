
function getAllPromiseData() {
    let users = fetch("https://jsonplaceholder.typicode.com/users")
    let products = fetch("https://jsonplaceholder.typicode.com/posts/1")

    Promise.all([users, products])
        .then(values => {
            // console.log("promise data ", values)
            return Promise.all(values.map(e => e.json()))
            // return values.map(e => e.json())
        })
        .then(([users, products]) => {
            console.log('products ', products)
            console.log('users ', users)
        }).catch(e => {
            console.log("Error : ", e)
        })

}

export default getAllPromiseData