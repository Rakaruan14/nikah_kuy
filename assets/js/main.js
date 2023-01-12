$(function(){
    $(document).scroll(function(){
        var $nav = $(".navbar");        
        var $dropdown = $(".dropdown-menu");
        if($(this).scrollTop() > $nav.height()){
            $nav.addClass("scrolled");
            $nav.removeClass("navbar-dark");
            $nav.addClass("navbar-light");
            $dropdown.addClass("scrolled");
            $dropdown.removeClass("biru");
        } else {
            $nav.removeClass("scrolled");
            $nav.addClass("navbar-dark");
            $nav.removeClass("navbar-light");
            $dropdown.removeClass("scrolled");
            $dropdown.addClass("biru");
        }
    });
});
