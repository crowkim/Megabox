// 배너 이미지 슬라이드 //
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
});

// 탭메뉴 //
let movie_btn = $(".movie_title>ul>li");
let movie_cont = $(".movie_chart>div>div");
movie_cont.hide().eq(0).show();

movie_btn.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    movie_btn.removeClass("active").eq(index).addClass("active");
    movie_cont.hide().eq(index).show();

});

//영화차트 이미지 슬라이드
var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 4,
    spaceBetween: 24,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
})

// 공지사항 탭메뉴 //
$(".notice>ul>li>ul").hide();
$(".notice>ul>li.active>ul").show();
function notice_tabmenu(e){
    e.preventDefault();
    $(".notice>ul>li").removeClass("active")
    $(this).parent("li").addClass("active")
    $(".notice>ul>li>ul").hide();
    $(this).siblings("ul").show();
}
$(".notice>ul>li>a").focus(notice_tabmenu).click(notice_tabmenu)
