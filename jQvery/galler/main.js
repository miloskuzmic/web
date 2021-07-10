var arrOfImgLinks = [
    "http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg",
    "http://farm9.staticflickr.com/8379/8588290361_ecf8c27021_s.jpg",
    "http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg",
  ];

$(document).ready(function () {
    $('body').prepend('<h1>Gallery</h1>')

  $(arrOfImgLinks).each(function (index) {
    var createImg = $("<img>");
    $("h1").after(createImg);
    $("img:first").attr("src", arrOfImgLinks[index]);
  });

  $("img").each(function (index, element) {
    var widthPx = Math.random() * (250 - 150) + 150;

    $(element).css("width", widthPx + "px");

    console.log(widthPx);
    if (widthPx < 200) {
      $(this).css("border", "5px solid red");
      return true;
    } else {
      return false;
    }
  });
});
