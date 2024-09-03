let arr=[11,22,33,44,55,66]

function getEvenNumbers(ans){

    return ans.filter((ele)=>{
        return ele%2==0
    })
}

console.log(getEvenNumbers(arr))