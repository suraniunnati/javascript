let arr=[10, 20, 30, 150, 60]

let ans= arr.some((element,index)=>{
    if(element>100){
        return element;
     }
    }
)
console.log(ans)