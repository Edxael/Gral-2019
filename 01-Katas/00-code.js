
// NO DUPS

// const noDups = (arr) => {
//   console.log(arr)

//   // return new Set(arr)

//   singles = arr.reduce((pv, cv) => {
//     pv[cv] = pv[cv] + 1 || 1
//     return pv
//   }, {})

//   let answer = Object.keys(singles)
//   return answer

// }


// ==================================================
// const noDups = (arr) => {
//   console.log(arr)
//   return Array.from(new Set(arr))
// }


// ==================================================
// const noDups = (arr) => {
//   console.log(arr)
//   let singles = []

//   for(x = 0; x <= arr.length; x++){
//     if(!singles.includes(arr[x])){
//       if(arr[x] !== undefined){
//         singles.push(arr[x])
//       }
//     }
//   }

//   return singles
// }




console.log(noDups(['a', 'p', 'p', 'l', 'e']))















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

// console.log(rwr('cara'))





// const isUnique = (str) => {
//   return new Set(str).size === str.length
// }

// console.log(isUnique('sun'))