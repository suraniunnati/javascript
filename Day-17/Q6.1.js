let arr=[5,6,8,9,34,87]

function areAllPositive(pos){
   let ans= pos.every((element)=>{
       return element > 0
   })
   console.log(ans)
  
}
areAllPositive(arr)
