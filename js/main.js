$(document).ready(()=>{
    setTimeout(() => {
        $("#preloader").css({
            opacity : "0" , 
            visibility : "hidden"  
        })
       }, 2000);
       setTimeout(() => {
       $(".loader").css("opacity"  , "0") ;
    }, 1000); 
/* I used setTimeOut here because this app dosen't have enough data to let it loading slowly*/
$(document).on("click", ".menu-bars", function () {
    if ($(".main-menu").hasClass("d-none") === true) {
      $(".main-menu").removeClass("d-none");
      $(".menu-bars").removeClass("fa-bars");
      $(".menu-bars").addClass("fa-xmark menu-bars-main-menu");
      $(".arabic").addClass("arabic-main-menu");
      $(".arabic").removeClass("d-none");
      $(".quotation").addClass("quotation-main-menu display-block");
      $(".logo").remove();
    } else {
        $(".main-menu").addClass("d-none");
        $(".menu-bars").addClass("fa-bars");
        $(".menu-bars").removeClass("fa-xmark menu-bars-main-menu");
        $(".arabic").removeClass("arabic-main-menu");
        $(".arabic").addClass("d-none");
        $(".quotation").removeClass("quotation-main-menu display-block");
        $("<img class='logo' src='images/logo.png'>").insertAfter(".close-section") ;
    }
  });
})










