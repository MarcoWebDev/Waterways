var click = document.getElementById("btn-sub");
var fields = document.querySelectorAll("input.req");
var msg = document.getElementById("msg");
var close = document.getElementsByClassName ("close");

var i; 
var flag = 1;
  
  click.addEventListener("click", function() {
    console.log(1);
    for ( i = 0; i <fields.length; i++) {
      if(fields[i].value == ""){
        flag =0;
        break;
      }
    }
    i=0;
    
    if (flag == 1){
    msg.style.display = "block";
    for (i = 0; i<fields.length; i++) {
      fields[i].value="";
    }
   }
});

close[0].addEventListener("click",function() {
  msg.style.display = "none";                                                                                                                                                                                                                                                                                                                                                                                      

});
  
    



