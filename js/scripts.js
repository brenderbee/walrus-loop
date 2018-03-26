$(document).ready(function() {

  var tags = ["header", "paragraph", "image"]

  tags.forEach(function(tag){

    // var clickedOn = $("" + tag).click();
    $(this).click(function() {
      alert("This is a/an " + tag);
    });
  });
  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");

});
