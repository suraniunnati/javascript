let arr=[1,2,3,4,5,6]

function getEvenNumbers(ans){

    return ans.filter((ele)=>{
        return ele%2==0
    })
}

console.log(getEvenNumbers(arr))