function abstractExpand(index) {
  var dots = document.getElementById("dots_" + index);
  var moreText = document.getElementById("more_" + index);
  var btnText = document.getElementById("button_" + index);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
  }
}

