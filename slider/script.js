let arr=[
    {
        Image:"https://nyvoweb.com/wp-content/uploads/lnmslider-media/slider/default-slider_demo-slider-2.jpg",
        text:"Garden Week",
        read:" presentation for PowerPoint "
    }
    ,
    {
        Image: "https://nyvoweb.com/wp-content/uploads/lnmslider-media/slider/default-slider_demo-slider-3.jpg",
        text:"secces",
         read:"life is make better"
    }
   ,
   {
    Image:"https://wowslider.com/sliders/demo-91/data1/images/stream384655_1280.jpg",
    text:"Mystical Nature",
     read:"Good for helth"
   }
    ,
    {
        Image:"https://image.slidesdocs.com/responsive-images/background/natural-forest-wonders-powerpoint-background_d4f9743c30__960_540.jpg",
        text:"save time",
         read:"Time is make your life better"
    }
    ,
    {
        Image: "https://h5p.org/sites/default/files/h5p/content/130378/images/file-59e4897eec51d.jpeg",
        text :"Nature",
         read:"life is make better and helthy"
    }
   
]

let x=0;

function prev(){
    x++;
    if(x == arr.length){
        x=0
    }
    document.getElementById("image").innerHTML=`<img src="${arr[x].Image}" height="100%"; width="100%";>,`
      document.getElementById("text").innerHTML=`${arr[x].text}`
      document.getElementById("read").innerHTML=`${arr[x].read}`
}

function next(){
    x--;
    if(x < 0){
        x=arr.length-1
    }
   document.getElementById("image").innerHTML=`<img src="${arr[x].Image}" height="100%"; width="100%";>,`
      document.getElementById("text").innerHTML=`${arr[x].text}`
        document.getElementById("read").innerHTML=`${arr[x].read}`
   
}

document.getElementById(prev())