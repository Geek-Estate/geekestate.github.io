var scrollToTopButton;

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                    initHeaderHamburger();

                    if(file.indexOf('footer.html') !== -1)
                    {
                        scrollToTipInit();
                    }

                    if(file.indexOf('trusted-by-founders') !== -1) {
                        trustedByFoundersPartners();
                    }
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }

    var includeJoinNowPage = window.location.href.includes('join-now.html') || window.location.href.includes('join-now');
    var includeFAQPage = window.location.href.includes('FAQ.html') || window.location.href.includes('FAQ');
    var includeCompanyPage = window.location.href.includes('companies.html') || window.location.href.includes('companies');
    var includeMembersPage = window.location.href.includes('members.html') || window.location.href.includes('members');
    var includeAboutPage = window.location.href.includes('about.html') || window.location.href.includes('about');
    var includeBrandPage = window.location.href.includes('brand.html') || window.location.href.includes('brand');
    var includeApprovedPage = window.location.href.includes('approved.html') || window.location.href.includes('approved');
    var includeWelcomePage = window.location.href.includes('welcome.html') || window.location.href.includes('welcome');
    
    if(window.location.href.includes('approved.html') ||
        includeJoinNowPage ||
        window.location.href.includes('thank-you-newsletter.html') ||
        includeFAQPage
    ) {
        $('.contact-btn').remove();
    }

    if(
        window.location.href.includes('approved.html')||
        includeCompanyPage ||
        includeJoinNowPage ||
        window.location.href.includes('thank-you-newsletter.html') ||
        includeFAQPage ||
        includeMembersPage
    ) {
        $('.wrapper-sub-header, .header-small, .arrow').remove();
        
    } else if(window.location.href.includes('thanks-you.html') ||
        window.location.href.includes('welcome.html')
    ) {
        $('.all').remove();
        $('.wrapper-welcome').html('<h1 class="welcome" style="color: #85AB37;font-weight:500;">Welcome to GEM!</h1>' +
            '<h2 style="color: #fff;text-align:center;">Thank you so much for joining</h2>');
    }

    if(includeWelcomePage)
    {
        $('.section-hero .wrapper h1').html('Welcome to GEM!');
        $('.section-hero .wrapper').append('<h2 style="color: #ffffff; z-index:1; font-size: 40px; font-family: Poppins; margin-bottom: 20px; text-align: center;">Thank you so much for joining</h2>');
    }

    if(includeJoinNowPage)
    {
        $('.all').remove();
        // $('.wrapper-welcome').html('<div class="section-body-approved"><div style="margin: 40px 0 40px 0;"><h2 class="section-body-approved-label">GEM Application</h2></div></div>');
        $('.section-hero .wrapper h1').html('GEM Application');
    }

    if(includeFAQPage)
    {
        $('.all').remove();
        $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">Frequently Asked Questions</h2></div>');
    }

    if(includeCompanyPage)
    {
        $('.all').remove();
        // $('.wrapper-welcome').html('<h2 class="welcome">Representing companies such as...</h2>');
        $('.section-hero .wrapper h1').html('Companies Represented in GEM');
    }

    if(includeMembersPage) {
        $('.section-hero .contact-btn').remove();
        $('.all').remove();
        // $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">GEM Member Access</h2></div>');
        $('.section-hero .wrapper h1').html('GEM Member Access');
    }

    if(includeAboutPage) {
        $('.all').remove();
        $('.section-hero h1').html('About Geek Estate');
        // $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">About GeekEstate</h2></div>');
    }

    if(includeBrandPage) {
        $('.all').remove();
        // $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">Brand Assets</h2></div>');
        $('.section-hero .wrapper h1').html('Brand Assets');
    }

    if(includeApprovedPage) {
        $('.all').remove();
        // $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">Brand Assets</h2></div>');
        $('.section-hero .wrapper h1').html('Connecting the boldest proptech entrepreneurs across every sector');
    }
}
includeHTML();

/**
 * Header
 */

var headerHamburgerHasEvent = false;


function initHeaderHamburger() {
    let headerHamburger = $('.header-hamburger');
    if(headerHamburger.length && !headerHamburgerHasEvent)
    {
        headerHamburgerEvent();
    }
}

function headerHamburgerEvent() {
    $('.header-hamburger').on('click', function() {
        $('.header-menu-collapsed').toggleClass('show');
        $('.main-nav').toggleClass('show');
    });
     /**
   * Add Padding Before Body Content
   */

    var wrapperHeader = document.querySelector(".wrapper-header-btn.no-hero");

    if(window.outerWidth <= 600)
    {
        wrapperHeader = document.querySelector(".wrapper-header-btn");
        if(wrapperHeader)
        {
            let wrapperHeaderHeight = wrapperHeader.clientHeight;
            let nextElement = wrapperHeader.parentElement.nextElementSibling;
    
            nextElement.style.paddingTop = wrapperHeaderHeight + 'px';
        }

    }else if(wrapperHeader)
    {
        let wrapperHeaderHeight = wrapperHeader.clientHeight;
        wrapperHeader.parentElement.nextElementSibling.style.paddingTop = wrapperHeaderHeight + 'px';
    }
    
    headerHamburgerHasEvent = true;
}

initHeaderHamburger();

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToTipInit() {
    // Get the button:
    scrollToTopButton = document.getElementById("scrollToTop");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
}

function trustedByFoundersPartners() {
    if(window.innerWidth < 768){
        console.log("MOBILE");
        $('.image-list.founders').slick({
            infinite: true,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/arrow-left-circle.png" /></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/arrow-right-circle.png" /></button>',
            appendArrows: $('#slick-meta-founders'),
            appendDots: $('#slick-meta-founders'),
            lazyLoad: 'progressive',
            slidesToShow: 2,
            slidesToScroll: 2
        });

        $('.image-list.partners').slick({
            infinite: true,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/arrow-left-circle.png" /></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/arrow-right-circle.png" /></button>',
            appendArrows: $('#slick-meta-partners'),
            appendDots: $('#slick-meta-partners'),
            lazyLoad: 'progressive',
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
}
