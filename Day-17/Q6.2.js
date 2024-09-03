let arr=['mango','orange','banana']

function areAllStringsLong(pos){
   let ans= pos.every((element)=>{
       return element.length > 5
   })
   console.log(ans)
  
}
areAllStringsLong(arr)