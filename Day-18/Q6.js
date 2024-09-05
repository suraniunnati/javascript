let  cars=[ { "brand": "Toyota", "model": "Corolla", "year": 2022 },
     { "brand": "Honda", "model": "Civic", "year": 2021 },
      { "brand": "Ford", "model": "Fusion", "year": 2020 }]

      let sum=""
   cars.forEach((ele)=>{
       if(ele.year>2020){
        console.log(ele.brand)
       }
  
   })   