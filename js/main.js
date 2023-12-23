(function ($) {
   "use strict";

   /*=========================
	PRELOADER JS
	===========================*/
   $(window).on("load", function (event) {
      $(".preloader").delay(500).fadeOut(500);
   });

   /*=========================
	endu-slider
	===========================*/
   $(".endu-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
   });

   /*=========================
	hero-slider
	===========================*/
   function heroSlider() {
      var BasicSlider = $(".hero-slider");
      BasicSlider.on("init", function (e, slick) {
         var $firstAnimatingElements = $(".hero-slide:first-child").find(
            "[data-animation]"
         );
         doAnimations($firstAnimatingElements);
      });
      BasicSlider.on(
         "beforeChange",
         function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
               '.hero-slide[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
         }
      );
      BasicSlider.slick({
         autoplay: true,
         autoplaySpeed: 10000,
         fade: true,
         dots: false,
         arrows: true,
         prevArrow: '<button type="button" class="slick-prev">Prev</button>',
         nextArrow: '<button type="button" class="slick-next">Next</button>',
      });

      function doAnimations(elements) {
         var animationEndEvents =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
         elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data("delay");
            var $animationType = "animated " + $this.data("animation");
            $this.css({
               "animation-delay": $animationDelay,
               "-webkit-animation-delay": $animationDelay,
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
               $this.removeClass($animationType);
            });
         });
      }
   }
   heroSlider();

   /*=========================
	testimony-slider
	===========================*/
   $(".testimony-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i>Prev</button>',
      nextArrow:
         '<button type="button" class="slick-next">Next<i class="fas fa-angle-right"></i></button>',

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });

   /*=========================
	product-slider
	===========================*/
   $(".product-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: "0px",
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });

   /*=========================
	single-shop-product-slider
	===========================*/
   $(".single-shop-pop").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });
   $(".single-shop-product-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<div type="button" class="slick-prev">Prev</div>',
      nextArrow: '<div type="button" class="slick-next">Next</div>',
   });
   $(".brand-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow:
         '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow:
         '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 5,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });

   /*=========================
	magnificPopup image JS
	===========================*/
   $(".video-btn").magnificPopup({
      type: "iframe",
   });

   $(".pop-img-btn").magnificPopup({
      type: "image",
   });

   /*=========================
	SCROLL-UP JS
	===========================*/
   $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });

   // skrollr
   var s = skrollr.init();
   if (s.isMobile()) {
      s.destroy();
   }

   // niceSelect
   $("select").niceSelect();

   // responsive menu
   const resBar = document.querySelectorAll(
      ".humberger-bar, .resonsive-slide-overlay"
   );
   resBar.forEach((btn) => {
      btn.addEventListener("click", () => {
         for (let i = 0; i < resBar.length; i++) {
            resBar[i].classList.toggle("active");
         }
         document.querySelector(".resonsive-slide").classList.toggle("active");
      });
   });

   // custom tab
   tabFunc(
      document.querySelectorAll(".feature-tab-link"),
      document.querySelectorAll(".feature-tab")
   );
   tabFunc(
      document.querySelectorAll(".performance-link"),
      document.querySelectorAll(".performance-tab")
   );
   tabFunc(
      document.querySelectorAll(".service-link"),
      document.querySelectorAll(".service-tab")
   );
   tabFunc(
      document.querySelectorAll(".single-shop-link"),
      document.querySelectorAll(".single-shop-tab")
   );
   tabFunc(
      document.querySelectorAll(".about-page-tab-links ul li"),
      document.querySelectorAll(".about-page-tab")
   );

   function tabFunc(tabLinks, tabs) {
      tabLinks.forEach((link, index) => {
         link.addEventListener("click", () => {
            for (let i = 0; i < tabLinks.length; i++) {
               tabLinks[i].classList.remove("active");
               tabs[i].classList.remove("active");
            }
            link.classList.add("active");
            tabs[index].classList.add("active");
         });
      });
   }

   // select sibling child
   const selectableList = document.querySelectorAll(
      ".select-list ul li, .single-shop-content .color-list li, .single-shop-content .size-list li"
   );
   selectableList.forEach((list) => {
      list.addEventListener("click", () => {
         let listParent = list.closest("ul");
         for (let i = 0; i < listParent.children.length; i++) {
            listParent.children[i].classList.remove("active");
         }
         list.classList.add("active");
      });
   });

   // qty
   const qty = document.querySelectorAll(".qty");
   qty.forEach((wrap) => {
      let input = wrap.querySelector("input");
      let stepUp = wrap.querySelector(".spin-up");
      let stepDown = wrap.querySelector(".spin-down");
      stepUp.addEventListener("click", () => {
         input.stepUp();
      });
      stepDown.addEventListener("click", () => {
         input.stepDown();
      });
   });

   // faq accordings
   const faqWrap = document.querySelectorAll(".faq-box-wrap");
   faqWrap.forEach((wrap) => {
      let faqBox = wrap.querySelectorAll(".faq-box");
      faqBox.forEach((bx) => {
         let title = bx.querySelector(".faq-box-title");
         let body = bx.querySelector(".faq-box-body");
         if (bx.classList.contains("active")) {
            window.addEventListener("load", () => {
               body.style.maxHeight = body.scrollHeight + "px";
            });
         }
         title.addEventListener("click", () => {
            if (bx.classList.contains("active")) {
               bx.classList.remove("active");
               body.style.maxHeight = null;
            } else {
               for (let i = 0; i < faqBox.length; i++) {
                  faqBox[i].classList.remove("active");
                  faqBox[i].querySelector(
                     ".faq-box-body"
                  ).style.maxHeight = null;
               }
               bx.classList.add("active");
               body.style.maxHeight = body.scrollHeight + "px";
            }
         });
      });
   });

   // custom tab
   tabFunc(
      document.querySelectorAll(".account-link li"),
      document.querySelectorAll(".account-tab")
   );

   function tabFunc(tabLinks, tabs) {
      tabLinks.forEach((link, index) => {
         link.addEventListener("click", () => {
            for (let i = 0; i < tabLinks.length; i++) {
               tabLinks[i].classList.remove("active");
               tabs[i].classList.remove("active");
            }
            link.classList.add("active");
            tabs[index].classList.add("active");
         });
      });
   }

   // show or hide input password text
   const passwordBx = document.querySelectorAll(".password-bx");

   passwordBx.forEach((bx) => {
      let input = bx.querySelector("input");
      let icon = bx.querySelector("i");

      icon.addEventListener("click", () => {
         if (input.type == "password") {
            input.type = "text";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
         } else {
            input.type = "password";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
         }
      });
   });
   // gridChangeBtn
   const gridChangeBtn = document.querySelectorAll(".grid-change-btn");
   gridChangeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
         let icon = btn.querySelector("i");
         icon.classList.toggle("fa-th");
         icon.classList.toggle("fa-list");
      });
   });

   // toggle class on click
   clickToggleClass(
      document.querySelectorAll(
         ".shop-filter-btn, .dashboard-close, .dashboard-overlay"
      ),
      document.querySelectorAll(".shop-page-dashboard, .dashboard-overlay")
   );
   clickToggleClass(
      gridChangeBtn,
      document.querySelectorAll(".shop-product-content")
   );

   function clickToggleClass(clickable, victim) {
      clickable.forEach((btn) => {
         btn.addEventListener("click", () => {
            for (let i = 0; i < victim.length; i++) {
               victim[i].classList.toggle("active");
            }
         });
      });
   }
})(jQuery);
