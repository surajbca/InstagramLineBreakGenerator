function copyValue() {
  const copyValue = document.getElementById("copyValue");

  //copyValue.select();
  // copyValue.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyValue.value);
  //alert("Copied the text: " + copyValue.value);

  //var l = document.getElementById("textarea1").value;
  if (copyValue.length > 10) {
    copyValue = copyValue + "<br />";
  }
}
