
export default function getPromise() {
    let data = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => resolve(res.json()))
            .catch(e => {
                reject(e)
                console.log("Error in promise", e)
            })
    })

    data.then(d => {
        console.log("Users data ", d)
    }).catch(err => {
        console.log("Error: ", err)
    })
}