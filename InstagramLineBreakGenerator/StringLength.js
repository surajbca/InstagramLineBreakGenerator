function length() {
  var txt = document.getElementById("copyValue").value;
  var len = txt.length;
  document.getElementById("stringLength").innerHTML = len;

  /*if (len > 0) {
    document.write("Sucess"); // if len > 0 do some action
  } else document.write(txt); //else condition*/
}
