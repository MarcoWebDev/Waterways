var cont = document.querySelector("#btn-sub");
var mod = document.getElementById("msg");
var close = document.getElementsByClassName("close");

var i;

  cont.addEventListener("click", function() {
    mod.style.display="block";
  });

for (i = 0; i < close.length ; i++){
  
  close[i].addEventListener("click", function() {
    mod.style.display= "none";
  });

}
  