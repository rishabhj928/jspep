const calc = (a,b) => {
  let data = a.concat(b),
      arr=[]
  data.filter(i=>{
    if(!(data.indexOf(i) !== data.lastIndexOf(i)))
      arr.push(i)
  })
  return arr
}

const getSymmetry = (...arr) => {
  var l=arr.length,
      temp=[]
//   for(var i=0;i<l-1;i++){
//     temp.push(calc(arr[i],arr[i+1]))
//   }
  var aa = calc(arr[0],arr[1])
  return calc(aa,arr[2])
  
}
console.log(getSymmetry([1,2,5],[2,3,5],[3,4,5]))