
// const rwr = (str) => {

//   let answer = ''
//   let arr = str.split('')
//   console.log(arr)

//   for(let x = 0; x < str.length; x++){
//     answer = arr[x] + answer
//   }

//   return answer
// }


const rwr = (str) => {
  let answer = ''
  
  for(let x = 0; x < str.length; x++){
    answer = str[x] + answer
  }

  return answer
}



// const rwr2 = (str) => {
//   return str.split('').reduce((pv, cv) => {
//     return cv + pv
//   }, '')
// }

console.log(rwr('cara'))