
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
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
        }
    }
    
    if(window.location.href.includes('approved.html') ||
        window.location.href.includes('join-now.html') ||
        window.location.href.includes('thank-you-newsletter.html') ||
        window.location.href.includes('FAQ.html')
    ) {
        $('.contact-btn').remove();
    }

    if(window.location.href.includes('members.html')) {
        $('.section-hero .contact-btn').remove();
    }

    if(
        window.location.href.includes('approved.html')||
        window.location.href.includes('companies.html') ||
        window.location.href.includes('join-now.html') ||
        window.location.href.includes('thank-you-newsletter.html') ||
        window.location.href.includes('FAQ.html') ||
        window.location.href.includes('members.html')
    ) {
        $('.wrapper-sub-header, .header-small, .arrow').remove();
        
    } else if(window.location.href.includes('thanks-you.html') ||
        window.location.href.includes('welcome.html')
    ) {
        $('.all').remove();
        $('.wrapper-welcome').html('<h1 class="welcome" style="color: #85AB37;font-weight:500;">Welcome to GEM!</h1>' +
            '<h2 style="color: #fff;text-align:center;">Thank you so much for joining</h2>');
    }
}
includeHTML();

$('.header-hamburger').on('click', function() {
    $('.header-menu-collapsed').toggleClass('show');
});