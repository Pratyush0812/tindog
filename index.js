$(".sound1").on("click",function(){
  var audio = new Audio('sounds/dog1.mp3');
  audio.play();
});
$(".sound2").on("click",function(){
  var audio = new Audio('sounds/dog2.mp3');
  audio.play();
});
$(".sign").on("click",function(){
  $(".bg-model").css("display","block");
  $(".hidden").addClass("newclass");

});
$(".cross").on("click",function(){
  $(".bg-model").css("display","none");
});
$(".DOM").on("mouseover",function(){
  $(".DOM").addClass("hel");
})
$(".DOM").on("mouseout",function(){
  $(".DOM").removeClass("hel");
})
$(".DOM1").on("mouseover",function(){
  $(".DOM1").addClass("hel");
})
$(".DOM1").on("mouseout",function(){
  $(".DOM1").removeClass("hel");
})
