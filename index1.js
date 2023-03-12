// $(".butn-primary").mouseover(function(){
//   $(".butn-primary").addClass("btn-back");
// })
// $(".butn-primary").click(function(){
//   $(".butn-primary").addClass("btn-back");
// })
//
// $(".butn-primary").mouseout(function(){
//   $(".butn-primary").removeClass("btn-back");
// })

let a = document.querySelectorAll(".butn-primary");
console.log(a);
a.forEach(function(btn){
  btn.addEventListener("click",function(){

     this.classList.toggle("btn-back");
     this.textContent =(this.classList.contains("btn-back")) ? "VOTED" :"VOTE";
  });
});
