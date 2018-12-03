  function triangles (){

  var length=parseFloat(prompt("enter the length"));
  var width=parseFloat(prompt("enter the width"));
  var height=parseFloat(prompt("enter the height"));

  if (isNaN(length) && isNaN(width) && isNaN(height)) {
  alert("Please input a Number.");
  }
  else if(length===width && length===height && width===height){
  alert("equilateral:All sides are equal");
  }
  else if(length===width || length===height || width===height) {
  alert("isosceles:Exactly 2 sides are equal");
  }
  else if((length+width)<=height || (length+height)<=width || (width+height)<=length) {
  alert("NOT a triangle");
  }
  else {
  alert("scalene:No sides are equal");
  }
  }
