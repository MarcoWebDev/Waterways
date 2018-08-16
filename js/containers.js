var std_20 = document.getElementById("20-std");
var std_40 = document.getElementById("40-std");
var hc_40 = document.getElementById("40-hc");

var rf_20 = document.getElementById("20-rf");
var rf_40 = document.getElementById("40-rf");

var flat_20 = document.getElementById("20-flat");
var flat_40 = document.getElementById("40-flat");
var flat_hc_40 = document.getElementById("40-flat-hc");

var ot_20 = document.getElementById("20-ot");
var ot_40 = document.getElementById("40-ot");
var othc_40 = document.getElementById("40-othc");


var std_20_mod = document.getElementById("20-std-mod");
var std_40_mod = document.getElementById("40-std-mod");
var hc_40_mod = document.getElementById("40-hc-mod");

var rf_20_mod = document.getElementById("20-rf-mod");
var rf_40_mod = document.getElementById("40-rf-mod");

var flat_20_mod = document.getElementById("20-flat-mod");
var flat_40_mod = document.getElementById("40-flat-mod");
var flat_hc_40_mod = document.getElementById("40-flat-hc-mod");

var ot_20_mod = document.getElementById("20-ot-mod");
var ot_40_mod = document.getElementById("40-ot-mod");
var othc_40_mod = document.getElementById("40-othc-mod");

var close = document.getElementsByClassName("close");

var i,current;



std_20.addEventListener("click",function(){
	std_20_mod.style.display = "block";
	current=std_20_mod;
});

std_40.addEventListener("click",function(){
	std_40_mod.style.display = "block";
	current=std_40_mod;
});

hc_40.addEventListener("click",function(){
	hc_40_mod.style.display = "block";
	current = hc_40_mod;
});

rf_20.addEventListener("click",function(){
	rf_20_mod.style.display = "block";
	current = rf_20_mod;
});

rf_40.addEventListener("click",function(){
	rf_40_mod.style.display = "block";
	current = rf_40_mod;
});

flat_20.addEventListener("click",function(){
	flat_20_mod.style.display = "block";
	current = flat_20_mod;
});

flat_40.addEventListener("click",function(){
	flat_40_mod.style.display = "block";
	current = flat_40_mod;
});

flat_hc_40.addEventListener("click",function(){
	flat_hc_40_mod.style.display = "block";
	current=flat_hc_40_mod;
});

ot_20.addEventListener("click",function(){
	ot_20_mod.style.display = "block";
	current=ot_20_mod;
});

ot_40.addEventListener("click",function(){
	ot_40_mod.style.display = "block";
	current=ot_40_mod;
});

othc_40.addEventListener("click",function(){
	othc_40_mod.style.display = "block";
	current=othc_40_mod;
});


 

for (i = 0; i < close.length ; i++){
  
  close[i].addEventListener("click", function() {
    current.style.display= "none";
    current = null;
  });

}
  