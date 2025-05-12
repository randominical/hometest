//burger menu START
const pageHeader = document.querySelector('#main-top-header');
const burgerMenuBTN = document.querySelector('#header_menu_burger');
if (burgerMenuBTN) burgerMenuBTN.addEventListener('click', burgerMenu);

function burgerMenu() {
  if (pageHeader) {
    pageHeader.classList.toggle('mobile-menu-shown');
    document.querySelector('#header_menu_burger').classList.toggle('active');
    document.querySelector('#header-menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow-hidden');
  }
}

window.addEventListener('resize', () => {
  if (pageHeader && pageHeader.clientWidth > 1379) {
    pageHeader.classList.remove("mobile-menu-shown");
    if (document.querySelector('#header_menu_burger')) {
      document.querySelector('#header_menu_burger').classList.remove('active');
      document.querySelector('#header-menu').classList.remove('active');
    }
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelectorAll('.menu-item-has-children').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.sub-menu').forEach(item => item.classList.remove('active'))
  }
});


//burger menu END
//submenu with burger
$(".header__list .menu-item-has-children").on("click", toggleChildrenMenu);

function toggleChildrenMenu() {
  let windowWidth = $(window).width();
  if (windowWidth <= 1378) {
    $(this).siblings(".menu-item-has-children").removeClass("active");
    $(this).toggleClass("active");
    console.log(this);
  } else if (windowWidth > 1378) {
    $(this).siblings(".menu-item-has-children").removeClass("active");
    $(this).removeClass("active");
  }
}
$(document).ready(function () {
  toggleChildrenMenu();
});
window.addEventListener("resize", function () {
  toggleChildrenMenu();
});
//submenu with burger END
//responsive menu
let widthS = window.matchMedia("(min-width: 0px) and (max-width: 1379px)");
const parent_original = document.querySelector("#header__column_2");
const parent = document.querySelector("#header_menu_cover");
const item1 = document.querySelector("#header__phone");
const item2 = document.querySelector("#login-list");
const item3 = document.querySelector("#become-a-partner-btn");

function responsiveMenu() {
  if (widthS.matches) {
    if (
      item1 &&
      item2 & item3 &&
      !item1.classList.contains("done") &&
      !item2.classList.contains("done") &&
      !item3.classList.contains("done")
    ) {
      parent.insertBefore(item1, parent.children[2]);
      parent.insertBefore(item2, parent.children[1]);
      parent.insertBefore(item3, parent.children[3]);
      item1.classList.add("done");
      item2.classList.add("done");
      item3.classList.add("done");
    }
  } else {
    if (
      item1.classList.contains("done") &&
      item2.classList.contains("done") &&
      item3.classList.contains("done")
    ) {
      parent_original.insertBefore(item1, parent_original.children[0]);
      parent_original.insertBefore(item2, parent_original.children[2]);
      parent_original.insertBefore(item3, parent_original.children[3]);
      item1.classList.remove("done");
      item2.classList.remove("done");
      item3.classList.remove("done");
    }
  }
}

$(document).ready(function () {
  if (parent) {
    responsiveMenu();
  }
});

window.addEventListener("resize", function () {
  if (parent) {
    responsiveMenu();
  }
});
//responsive menu END
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
