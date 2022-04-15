$(document).ready(function(){
  $(".product-list").slick({
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    mobileFirst: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '100px',
        }
      },
    ]
  });
  // $(".team-list").slick({
  //   arrows: false,
  //   dots: true,
  //   infinite: false,
  //   centerMode: true,
  //   mobileFirst: true,
  //   centerPadding: "20px",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: "unslick",
  //     },
  //   ]
  // });
  $('.company-link').on('click', function() {
    $('.company-link').removeClass('company-link-active');
    $(this).addClass('company-link-active');
    // $('.company-label')[$('.company-link').index(this)].focus();
    $('html, body').animate({scrollTop: $($('.company-label')[$('.company-link').index(this)]).offset().top }, 500)
  });

  var acc = document.getElementsByClassName("accordion-header");
  var i;
  
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          console.log("DDD");
          var accordionBody = this.nextElementSibling;
          if (accordionBody.style.maxHeight) {
              accordionBody.style.maxHeight = null;
          } else {
              accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
          }
      });
  }
});