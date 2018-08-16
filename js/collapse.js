var coll = document.getElementsByClassName("equip-collapse");
var nested_coll = document.getElementsByClassName("nested-collapse");
var nested_child = document.getElementsByClassName("nested-child");
var i,n;
var clicked = "dis";

for (i = 0; i < coll.length; i++) {
  
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
       this.classList.remove("collapse-active");
       content.style.maxHeight = null;
    }
    else{
      this.classList.add("collapse-active");
      content.style.maxHeight = content.scrollHeight + "px"; 
    }
  });

 /* coll[i].addEventListener("blur", function() {
    this.classList.remove("collapse-active");
    var content = this.nextElementSibling;
    content.style.maxHeight = null;
    console.log("blur");
  })*/

}
for (n = 0; n < nested_coll.length; n++) {
nested_coll[n].addEventListener("click",function() {
    this.classList.toggle("collapse-active");
    var content = this.nextElementSibling;
    if (clicked === "dis"){
      content.style.maxHeight = (2*(nested_child[0].scrollHeight + nested_child[1].scrollHeight)) + "px";
      clicked = "active";
    }
    else if (clicked === "active"){
      content.style.maxHeight = null;
      clicked = "dis";
    }
    
    console.log(clicked);
  });
}
