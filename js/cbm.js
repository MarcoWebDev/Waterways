var vol = document.getElementById("volume");
var wght = document.getElementById("weight");
var vol_fields = document.getElementsByClassName("vol");
var wght_fields = document.getElementsByClassName("wght");

var i,n;
var tot_vol =1;
var tot_wght=1;

  for (i=0;i<vol_fields.length;i++)
  {
    vol_fields[i].addEventListener("change", function() {
      console.log(vol_fields.length);
      if(this.value == ""){
        this.valueAsNumber = 1;
      }
      
     vol.valueAsNumber =( (vol_fields[0].valueAsNumber)*(vol_fields[1].valueAsNumber)*(vol_fields[2].valueAsNumber) )/1000000;
  });
  }

for (n=0;n<wght_fields.length;n++)
  {
    wght_fields[n].addEventListener("change", function() {
    
      if(this.valueAsNumber == ""){
        this.valueAsNumber = 1;
      }
       wght.valueAsNumber = (wght_fields[0].valueAsNumber)*(wght_fields[1].valueAsNumber);
  });
  }



    



