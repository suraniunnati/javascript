// windo-loder
$(window).on('load',function(){
    $('.container').fadeOut(5000);
})

// scroll
$(document).ready(function(){
    $("#top").click(function(){
        $('html,body').animate({scrollTop:0})
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>40)
        {
            $('#top').fadeIn();
        }
        else{
            $("#top").fadeOut();
        }
    })
})

var counter=0;
function slider()
{
    var arr=document.getElementsByClassName('image');

    for(var i=0;i<arr.length;i++)
    {
        arr[i].style.display="none";
    }
    if(counter==arr.length)
    {
        counter=0;
    }

    arr[counter].style.display="block"
    counter++;

    setTimeout(slider,2000);
    
}
slider()

var counters=0;
function slid()
{
    var arr=document.getElementsByClassName('images');

    for(var i=0;i<arr.length;i++)
    {
        arr[i].style.display="none";
    }
    if(counters==arr.length)
    {
        counters=0;
    }

    arr[counters].style.display="block"
    counters++;

    setTimeout(slid,2000);
    
}
slid()

var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
