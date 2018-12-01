  function triangleTracker(){
  var length = parsefloat(prompt ("Enter the length"));
  var width = parsefloat(prompt (" Enter the width"));
  var height = parsefloat(prompt ("Enter the height"));

  if (length === width && length === height && (width === height) {
  alert ("Equilateral: All sides are equal!")
  }
  else if (length === width || length === height || width === height) {
  alert ("Isosceles: Exactly 2 sides are equal.")
  }
  else if((length + width)<=height||(length + height)<=width ||(width + height)<=length) {
  alert ("Scalene: No sides are equal.")
  }
  else {
  alert("NOT a triangle.")
  }
  }
