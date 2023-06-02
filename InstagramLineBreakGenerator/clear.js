function ClearValue() {
  alert("Are you sure you want to delete your text?");
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
