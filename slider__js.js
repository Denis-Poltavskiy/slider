
var width=window.innerWidth;
var slide=[];
var button=document.querySelector('.button__show')
slide=document.querySelectorAll('.swiper-slide');


if (width<=767) {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}else {
    if (width <= 1119) {
        if (slide.length > 6) {
            for (var i = 6; i < slide.length; i++) {
                slide[i].style.display = "none";

            }


        }
    } else{
        for ( i = 8; i < slide.length; i++) {
            slide[i].style.display = 'none';

        }

    }
}
var none_block=1;
 button.addEventListener("click", function () {
     if (width <= 1119) {
         if (none_block === 1) {
             for (var i = 6; i < slide.length; i++) {
                 slide[i].style.display = 'flex';

             }
             none_block = none_block - 1;
         } else {
             for (var i = 6; i < slide.length; i++) {
                 slide[i].style.display = 'none';
             }
             none_block = none_block + 1;
         }
     } else{
         if (none_block === 1) {
             for (var i = 8; i < slide.length; i++) {
                 slide[i].style.display = 'flex';

             }
             none_block = none_block - 1;
         } else {
             for (var i = 8; i < slide.length; i++) {
                 slide[i].style.display = 'none';
             }
             none_block = none_block + 1;
         }

     }
 })