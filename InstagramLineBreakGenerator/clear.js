function ClearValue() {
  document.getElementById("copyValue").value = "";

  document.getElementById("stringLength").innerHTML = "0";

  let bold = document.getElementById("copyValue");
  bold.style.fontWeight = "";

  let italic = document.getElementById("copyValue");
  italic.style.fontStyle = "";

  let cursive = document.getElementById("copyValue");
  cursive.style.fontFamily = "";

  let fantasy = document.getElementById("copyValue");
  fantasy.style.fontFamily = "";
}
