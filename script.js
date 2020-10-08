$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 30) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    });
})