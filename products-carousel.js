
(function($) {

$(document).ready(function(){   
    $('.box').append(
        '<article>商品名が入ります商品名が入ります商品名が入ります</article><article class="price">￥10,000 (tax in)</article>'
    );




    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
    
    
    $("#menu").click(function(){
        $(".sp_menu_toggle").slideToggle();
    });
    

    $("#categori").click(function(){
        $(".categori_toggle").slideToggle();
        $("#categories").css('background-image','url(images/top/down_icon.png)');
    });
    
    
    $("#page_top").click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    
    });
    
    $(".logo").click(function() {
        window.location.href = "top.html";
    });
    
    $(".box").click(function() {
        window.location.href = "products.html";
    });
    
    
    $(window).load(function(){
      $("#list_img img").click(function(){
        var img_src = $(this).attr("src");
        $("#display_img img").attr("src", img_src);
      });
    });

});


}(jQuery));