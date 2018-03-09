$(function() {
  var randr = Math.floor(Math.random() * 255);
  var randg = Math.floor(Math.random() * 255);
  var randb = Math.floor(Math.random() * 255);

  var randtl = "rgb(" + randr + "," + randg + "," + randb +")";
  var randtr = "rgb(" + randr + "," + randg + "," + randb +")";
  var randbl = "rgb(" + randr + "," + randg + "," + randb +")";
  var randbr = "rgb(" + randr + "," + randg + "," + randb +")";

  $('.home.tl').css("background-color", randtl);
  $('.home.tr').css("background-color", randtr);
  $('.home.bl').css("background-color", randbl);
  $('.home.br').css("background-color", randbr);

});
