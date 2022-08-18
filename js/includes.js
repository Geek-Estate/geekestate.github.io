
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

    if(includeJoinNowPage)
    {
        $('.all').remove();
        $('.wrapper-welcome').html('<div class="section-body-approved"><div style="margin: 40px 0 40px 0;"><h2 class="section-body-approved-label">Ready to Apply?</h2></div>   <div style="margin: 40px 0 40px 0;"><h2 class="section-body-approved-label-small" style="color: #ffffff;">We require payment upfront to apply for membership. You’ll be redirected immediately to the GEM membership form after you setup your subscription. We’ll provide a full refund within three days if we decline your application. Still have questions? <a href="/FAQ.html">Check our FAQ</a>.</h2></div></div>');
    }

    if(includeFAQPage)
    {
        $('.all').remove();
        $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">Frequently Asked Questions</h2></div>');
    }

    if(includeCompanyPage)
    {
        $('.all').remove();
        $('.wrapper-welcome').html('<h2 class="welcome">Representing companies such as...</h2>');
    }

    if(includeMembersPage) {
        $('.section-hero .contact-btn').remove();
        $('.all').remove();
        $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">GEM Member Access</h2></div>');
    }

    if(includeAboutPage) {
        $('.all').remove();
        $('.wrapper-welcome').html('<div class="section-products section-body-approved wrapper"><h2 class="section-body-approved-label">About GeekEstate</h2></div>');
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
    });
     /**
   * Add Padding Before Body Content
   */

    var wrapperHeader = document.querySelector(".wrapper-header-btn.no-hero");

    if(window.outerWidth <= 600)
    {
        wrapperHeader = document.querySelector(".wrapper-header-btn");
        let wrapperHeaderHeight = wrapperHeader.clientHeight;
        let nextElement = wrapperHeader.parentElement.nextElementSibling;

        nextElement.style.paddingTop = wrapperHeaderHeight + 'px';
    }else if(wrapperHeader)
    {
        let wrapperHeaderHeight = wrapperHeader.clientHeight;
        wrapperHeader.parentElement.nextElementSibling.style.paddingTop = wrapperHeaderHeight + 'px';
    }
    
    headerHamburgerHasEvent = true;
}

initHeaderHamburger();