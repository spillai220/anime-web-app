$(document).ready(function(){
  // Activate Carousel
  $("#slider").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function(){
      $("#slider").carousel(0);
  });
  $(".item2").click(function(){
      $("#slider").carousel(1);
  });
  $(".item3").click(function(){
      $("#slider").carousel(2);
  });
  $(".item4").click(function(){
      $("#slider").carousel(3);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
      $("#slider").carousel("prev");
  });
  $(".right").click(function(){
      $("#slider").carousel("next");
  });
});
