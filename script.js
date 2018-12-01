var triangleTracker = function(){
  var length=document.prompt("enter the length")
  var width=document.prompt("enter the width")
  var height=document.prompt("enter the height")

  if(length===width && length===height && (width===height) {
  alert("Equilateral:All sides are equal")
  }
  else if(length===width || length===height || width===height) {
  alert("Isosceles:Exactly 2 sides are equal")
  }
  else if((length+width)<=height || (length+height)<=width || (width+height)<=length) {
  alert("Scalene:No sides are equal")
  }
  else{
  alert("NOT a triangle")
  }
