$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
     var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side1").val());
    var side3 = parseInt($("#side1").val());
    var result;
    // if (side1 === side2 === side3) {
    //   result = "This is an equilateral triangle";
    // if (side1 === side2) {
    //   if (side2 === side3) {
    //     if (side3 === side1) {
    //       result = "This is an equilateral triangle";
    //     }
    //     }
    //     }
    // } else if (side1 === side2 ! side3) {
    //   result = "This is an isosceles triangle";
    // } else if (side1 ! side2 === side3) {
    //   result = "This is an isosceles triangle";
    // } else if (side1 === side3 ! side2) {
    //   result = "This is an isosceles triangle";
    }
    console.log("result " + result);
    console.log("side1 " + side1);
    console.log("side2 " + side2);
    console.log("side3 " + side3);
     $("#output").text(result);
  });
  });
