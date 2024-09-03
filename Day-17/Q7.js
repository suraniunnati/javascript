let arr=[4,9,71,12]
function hasAnyEvenNumber(a){

    let ans=a.some((ele)=>{
        return ele%2==0
    })
    console.log(ans);
    
}

hasAnyEvenNumber(arr)