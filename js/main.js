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
});