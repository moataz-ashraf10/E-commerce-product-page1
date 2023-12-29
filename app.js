let small_image =document.querySelectorAll('.small-image img')
var big_image = document.getElementById('myImage')
small_image.forEach(function(el){
    el.onclick = function(){
        big_image.src=el.src
    }
})
let icon_shop=document.querySelector('.shop')
let card=document.querySelector('.card')
icon_shop.addEventListener('click',function(){
    icon_shop.classList.toggle('apper')
    if(icon_shop.classList.contains('apper')){
        card.style.display="block"
    }else{
        card.style.display="none"
    }
})
i=0
let number_shop=document.getElementById('number')
let plus=document.getElementById('plus')
let minus=document.getElementById('minus')
plus.onclick = function(){
    number_shop.value=++i;
}
minus.onclick = function(){
    number_shop.value=--i;
}
let number_shop1=document.querySelector('.numofshop')
let addtocard=document.querySelector('.add')
addtocard.onclick = function(){
    number_shop1.innerHTML=number_shop.value
    if(number_shop1.innerHTML<=0){
        number_shop1.style.visibility="hidden"
        document.querySelector('.card img').style.visibility="hidden"
        document.querySelector('.card .price').style.visibility="hidden"
        document.querySelector('.card .price1').style.visibility="hidden"
        document.querySelector('.card .num').style.visibility="hidden"
        document.querySelector('.card button').style.visibility="hidden"
    }else{
        number_shop1.style.visibility="visible"
        document.querySelector('.p2').style.visibility="hidden"
        document.querySelector('.num').innerHTML=number_shop.value
        document.querySelector('.card img').style.visibility='visible';
        document.querySelector('.card .price').style.visibility='visible';
        document.querySelector('.card .price1').style.visibility='visible';
        document.querySelector('.card .num').style.visibility='visible';
        document.querySelector('.card button').style.visibility='visible';
    }
}
var oo=document.querySelector('.lightbox .img1')
big_image.addEventListener('click',function(){
    oo.src=big_image.src
    document.querySelector('.lightbox').style.display='block'
});
document.querySelector('.delet').addEventListener('click',function(){
    document.querySelector('.lightbox').style.display='none'
});
let x=document.querySelector('.delete')
x.addEventListener('click',function(){
    document.querySelector('.nes4').style.visibility='hidden'
})
document.querySelector('.menu').addEventListener('click',function(){
    document.querySelector('.nes4').style.visibility='visible'
})