function copyValue() {
  let copyValue = document.getElementById("copyValue");
  copyValue.select();
  copyValue.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyValue.value);

  /* let chunks = [];
  const chunkSize = 62;

  let newValue = copyValue.value;
  //alert(newValue.length);
  // navigator.clipboard.writeText(chunks.join("\n"));

  while (newValue.length > 0) {
    // chunks.push(newValue.substring(0, chunkSize));
    // newValue = newValue.substring(chunkSize, newValue.length);

    temp = truncateStringToWord(newValue, chunkSize);
    //alert(temp);
    //alert(newValue.length);
    chunks.push(temp);
    newValue = newValue.substring(temp.length, newValue.length);
    //alert(newValue.length);
  }
  // alert(chunks.join("\n"));
  brokenValue = chunks.join("\n");
  copyValue.select();
  copyValue.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(brokenValue);*/
}

/*function truncateStringToWord(str, length, addEllipsis) {
  if (str.length <= length) {
    // provided string already short enough
    return str;
  }

  // cut string down but keep 1 extra character so we can check if a non-word character exists beyond the boundary
  str = str.substr(0, length + 1);

  // cut any non-whitespace characters off the end of the string
  if (/[^\s]+$/.test(str)) {
    str = str.replace(/[^\s]+$/, "");
  }

  // cut any remaining non-word characters
  str = str.replace(/[^\w]+$/, "");

  var ellipsis = addEllipsis && str.length > 0 ? "&hellip;" : "";

  return str + ellipsis;
}*/

/*
function splitString(str, len) {
  var ret = [];

  for (var offset = 0, strLen = str.length; offset < strLen; offset += len) {
    var substr = str.substr(offset, len);

    if (!/\s/.test(str.charAt(offset + len))) {
      substr = substr.substr(0, substr.lastIndexOf(" "));
    }

    ret.push(substr);
  }

  return ret;
}
*/
