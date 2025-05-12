//popup video
$("[popup-video]").on("click", popupVideoShow);

function popupVideoShow(e) {
  e.preventDefault();

  let thisVideoId = $(this).attr("popup-video");

  $("body").addClass("overflow-hidden");
  $(".popup-background").addClass("overflow-hidden");
  $(".popup-wrapp")
    .find(".popup-wrapp__video iframe")
    .attr("src", "https://www.youtube.com/embed/" + thisVideoId);

  $(".popup-section-video").addClass("popup-show");
}
$(".why-popup-close, .popup-close, .popup-background, .popup-wrapp").on(
  "click",
  () => {
    popupHide();
  }
);

function popupHide() {
  $("body").removeClass("overflow-hidden");
  $(".popup-background").removeClass("overflow-hidden");
  $(".popup-section").removeClass("popup-show");
  //popup form
  $(".popup-section-double").removeClass("popup-show");
  //popup form END
  $(".popup-wrapp").find(".popup-wrapp__video iframe").attr("src", "");
  //popup fullpage
  $(".popup-section-fullpage").removeClass("popup-show");
}
//popup video END


// Disclaimer Banner Show | Hide  Start

let footerBannerBTN = document.querySelector('#footer-banner-btn');
let footerBanner = document.querySelector('.footer-banner');

if (footerBannerBTN) {
  footerBannerBTN.addEventListener('click', () => {
    setCookie('acceptDisclaimer', 1, 365);
    footerBanner.style.display = 'none';
  })
}

if (footerBanner) {
  setTimeout(() => {
    let bannerCheckCookie = getCookie("acceptDisclaimer");

    if (bannerCheckCookie == 1) {
      footerBanner.style.display = 'none';
    } else {
      footerBanner.style.display = 'flex';
    }
  }, 3000)
}
// Disclaimer Banner Show | Hide End