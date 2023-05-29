function copyValue() {
  let copyValue = document.getElementById("copyValue");

  let chunks = [];
  const chunkSize = 62;

  let newValue = copyValue.value;
  //alert(newValue.length);
  // navigator.clipboard.writeText(chunks.join("\n"));

  while (newValue.length > 0) {
    chunks.push(newValue.substring(0, chunkSize));
    newValue = newValue.substring(chunkSize, newValue.length);
  }
  // alert(chunks.join("\n"));
  brokenValue = chunks.join("\n");
  copyValue.select();
  copyValue.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(brokenValue);
}
