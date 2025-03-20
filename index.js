// 1. 헤더 로드
$(document).ready(function () {
    $("#header-placeholder").load("header.html", function (response, status, xhr) {
        if (status == "error") {
            console.error("헤더 로드 오류:", xhr.status, xhr.statusText);
        }
    });
});

// Swiper 초기화
new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".section5Swiper", {
    slidesPerView: 4,  // 한 번에 5개씩 보이도록 설정
    spaceBetween: 30,  // 슬라이드들 간의 간격
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'bullets',  // 기본 동그라미 형태로 설정
      bulletClass: 'swiper-pagination-bullet', // 스타일을 지정할 수 있는 클래스
      dynamicBullets: false,  // 동적 갯수 조정 X
    },
    loop: true,  // 슬라이드가 끝에 다다르면 처음으로 돌아가게 설정
  });
  
// footer 로드 스크립트
$(document).ready(function () {
    $("#footer-placeholder").load("footer.html", function (response, status, xhr) {
        if (status == "error") {
            console.error("푸터 로드 오류:", xhr.status, xhr.statusText);
        }
    });
});
