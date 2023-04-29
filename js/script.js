const preloader = document.querySelector(".preloader");
const bodyLoaded = () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
};

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#scroll').css("right","10px");
        }else{
            $('#scroll').css("right","-140px");
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});