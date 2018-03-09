$(document).on("mousemove" , function (event) {

  $(".home.tl").css("width", event.pageX)
  $(".home.tl").css("height", event.pageY)

  $(".home.tr").css("width", $(window).width() - event.pageX)
  $(".home.tr").css("height", event.pageY)

  $(".home.bl").css("width", event.pageX)
  $(".home.bl").css("height", $(window).height() - event.pageY)

  $(".home.br").css("width", $(window).width() - event.pageX)
  $(".home.br").css("height", $(window).height() - event.pageY)

})
