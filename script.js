  function knowtriangle(){
  var length = prompt ("side length");
  var width = prompt (" side width");
  var height = prompt ("side height");

  if (length === width && length === height && (width === height) {
  alert ("Equilateral: All sides are equal!")
  }
  else if (length === width || length === height || width === height) {
  alert ("Isosceles: Exactly 2 sides are equal.")
  }
  else {
  alert ("Scalene: No sides are equal.")
  }
  else {
  alert("NOT a triangle.")
  }
  }
