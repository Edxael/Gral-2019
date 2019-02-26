const isUnique = (str) => {
  let response = true

  str.split('').reduce((pv, cv) => {
    pv[cv] = pv[cv] + 1 || 1
    if(pv[cv] > 1){ response = false }
    return pv
  }, {})

  return response
}


const isUnique2 = (str) => {
  return new Set(str).size === str.length
}

console.log(isUnique2('abcdefghxyz'))

