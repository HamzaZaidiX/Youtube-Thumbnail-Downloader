function youtube_thumbnail_downloader(url) {
  regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  match = url.match(regExp);
  if (match && match[1].length == 11) {
    vidurl = match[1];
    thumbnailpreview = "http://img.youtube.com/vi/" + vidurl + "/mqdefault.jpg";
    thumbnailhd = "http://img.youtube.com/vi/" + vidurl + "/maxresdefault.jpg";
    thumbnailmd = "http://img.youtube.com/vi/" + vidurl + "/hqdefault.jpg";
    thumbnaillow = "http://img.youtube.com/vi/" + vidurl + "/mqdefault.jpg";
  } else {
    alert(
      "The URL you have entered maybe incorrect. Please Enter a correct URL."
    );
    location.reload();
  }
  document.getElementById("thumbnailpreview").src = thumbnailpreview;
  document.getElementById("thumbnailhd").href = thumbnailhd;
  document.getElementById("thumbnailmd").href = thumbnailmd;
  document.getElementById("thumbnaillow").href = thumbnaillow;
}
$(document).keypress(function (event) {
  if (
    (event.which == 115 && (event.ctrlKey || event.metaKey)) ||
    event.which == 19
  ) {
    event.preventDefault();
    return false;
  }
  if (keyCode == 13) {
    $("#thumbdloadbtn").trigger("click");
  }
  return true;
});

$("#download-buttons").hide();
$("#thumbdloadbtn").click(function () {
  $("#download-buttons").slideDown(500).fadeIn(250);
  $("#thumbdloadbtn").hide();
  $(".input-group").hide();
});

// Replace source
$("img").error(function () {
  $(this).attr("src", "#.png");
});

// Or, hide them
$("img").error(function () {
  $(this).hide();
});

$("#ytlink").keydown(function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;
  if (keyCode == 13) {
    $("#thumbdloadbtn").trigger("click");
  }
});
