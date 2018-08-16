var radio_2 = document.getElementsByClassName("hide-form");
var radio_1 = document.getElementsByClassName("show-form");
var input = document.getElementsByClassName("changing");

var i,n,t,f;


for (i = 0; i < radio_1.length; i++) {
  
  radio_1[i].addEventListener("click", function() {
    var to_show = input;
    for ( n = 0; n < input.length; n++) {
      to_show[n].classList.remove("hidden");
      console.log(1);
    }
    });

}

for (t = 0; t < radio_2.length; t++) {
  
 radio_2[t].addEventListener("click", function() {
    for ( f = 0; f < input.length; f++) {
      var to_hide = input;
      to_hide[f].classList.add("hidden");
      console.log(2);
    }
    });

}
  
    



