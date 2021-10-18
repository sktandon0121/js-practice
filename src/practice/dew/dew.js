let arr = [0,1,2,3,4,5]

let i =1
let b = arr.reduce((a,b)=>{
  
  console.log(`A : ${a} and B: ${b} iteration : ${i++}`)
  return a+b
},9)

console.log(b)