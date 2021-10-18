



let url1 = "https://jsonplaceholder.typicode.com/posts"

let url2 = "https://jsonplaceholder.typicode.com/posts/1"

let url3 = "https://jsonplaceholder.typicode.com/posts/1/comments"

let p1 = fetch(url1).then(d1 => d1.json())


p1.then(r1 => {
    console.log(r1[0])
    return fetch(url2).then(d2 => d2.json())
}).then(r2 => {
    console.log("R2 ", r2)
    return fetch(url3).then(d2 => d2.json())
}).then(r3 => {
    console.log("R3 ", r3[0])
})




let p1 = fetch(url1).then(d1 => d1.json())


p1.then(r1 => {
    console.log(r1[0])
    return fetch(url2).then(d2 => d2.json())
})
setTimeout(function(){
  console.log("Hi")
},0)

function Test(){
  return new Promise(resolve=>{
    resolve(10)
  })
}
Test().then(res =>{console.log(res)})