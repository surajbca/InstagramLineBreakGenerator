/*function bold() {
  let bold = document.getElementById("copyValue");
  bold.style.fontWeight = "bold";
}

function italic() {
  let italic = document.getElementById("copyValue");
  italic.style.fontStyle = "normal";
}

function cursive() {
  let cursive = document.getElementById("copyValue");
  cursive.style.fontFamily = "cursive";
}

function fantasy() {
  let fantasy = document.getElementById("copyValue");
  fantasy.style.fontFamily = "fantasy";
}*/
function counter() {
  let textchars = document.getElementById("copyValue").value.length;
  $("#chars").text(textchars + " / 2200");
}
var boldChars = {
  0: "𝟎",
  1: "𝟏",
  2: "𝟐",
  3: "𝟑",
  4: "𝟒",
  5: "𝟓",
  6: "𝟔",
  7: "𝟕",
  8: "𝟖",
  9: "𝟗",
  a: "𝐚",
  b: "𝐛",
  c: "𝐜",
  d: "𝐝",
  e: "𝐞",
  f: "𝐟",
  g: "𝐠",
  h: "𝐡",
  i: "𝐢",
  j: "𝐣",
  k: "𝐤",
  l: "𝐥",
  m: "𝐦",
  ñ: "𝐧̃",
  n: "𝐧",
  o: "𝐨",
  p: "𝐩",
  q: "𝐪",
  r: "𝐫",
  s: "𝐬",
  t: "𝐭",
  u: "𝐮",
  v: "𝐯",
  w: "𝐰",
  x: "𝐱",
  y: "𝐲",
  z: "𝐳",
  A: "𝐀",
  B: "𝐁",
  C: "𝐂",
  D: "𝐃",
  E: "𝐄",
  F: "𝐅",
  G: "𝐆",
  H: "𝐇",
  I: "𝐈",
  J: "𝐉",
  K: "𝐊",
  L: "𝐋",
  M: "𝐌",
  N: "𝐍",
  O: "𝐎",
  P: "𝐏",
  Q: "𝐐",
  R: "𝐑",
  S: "𝐒",
  T: "𝐓",
  U: "𝐔",
  V: "𝐕",
  W: "𝐖",
  X: "𝐗",
  Y: "𝐘",
  Z: "𝐙",
};
var italicChars = {
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  ñ: "𝑛̃",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡",
};
var cursiveChars = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝒶",
  b: "𝒷",
  c: "𝒸",
  d: "𝒹",
  e: "𝑒",
  f: "𝒻",
  g: "𝑔",
  h: "𝒽",
  i: "𝒾",
  j: "𝒿",
  k: "𝓀",
  l: "𝓁",
  m: "𝓂",
  n: "𝓃",
  ñ: "𝓃̃",
  o: "𝑜",
  p: "𝓅",
  q: "𝓆",
  r: "𝓇",
  s: "𝓈",
  t: "𝓉",
  u: "𝓊",
  v: "𝓋",
  w: "𝓌",
  x: "𝓍",
  y: "𝓎",
  z: "𝓏",
  A: "𝒜",
  B: "ℬ",
  C: "𝒞",
  D: "𝒟",
  E: "ℰ",
  F: "ℱ",
  G: "𝒢",
  H: "ℋ",
  I: "ℐ",
  J: "𝒥",
  K: "𝒦",
  L: "ℒ",
  M: "ℳ",
  N: "𝒩",
  O: "𝒪",
  P: "𝒫",
  Q: "𝒬",
  R: "ℛ",
  S: "𝒮",
  T: "𝒯",
  U: "𝒰",
  V: "𝒱",
  W: "𝒲",
  X: "𝒳",
  Y: "𝒴",
  Z: "𝒵",
};
var strikethroughChars = {
  0: "𝟘",
  1: "𝟙",
  2: "𝟚",
  3: "𝟛",
  4: "𝟜",
  5: "𝟝",
  6: "𝟞",
  7: "𝟟",
  8: "𝟠",
  9: "𝟡",
  a: "𝕒",
  b: "𝕓",
  c: "𝕔",
  d: "𝕕",
  e: "𝕖",
  f: "𝕗",
  g: "𝕘",
  h: "𝕙",
  i: "𝕚",
  j: "𝕛",
  k: "𝕜",
  l: "𝕝",
  m: "𝕞",
  n: "𝕟",
  ñ: "𝕟̃",
  o: "𝕠",
  p: "𝕡",
  q: "𝕢",
  r: "𝕣",
  s: "𝕤",
  t: "𝕥",
  u: "𝕦",
  v: "𝕧",
  w: "𝕨",
  x: "𝕩",
  y: "𝕪",
  z: "𝕫",
  A: "𝔸",
  B: "𝔹",
  C: "ℂ",
  D: "𝔻",
  E: "𝔼",
  F: "𝔽",
  G: "𝔾",
  H: "ℍ",
  I: "𝕀",
  J: "𝕁",
  K: "𝕂",
  L: "𝕃",
  M: "𝕄",
  N: "ℕ",
  Ñ: "ℕ̃",
  O: "𝕆",
  P: "ℙ",
  Q: "ℚ",
  R: "ℝ",
  S: "𝕊",
  T: "𝕋",
  U: "𝕌",
  V: "𝕍",
  W: "𝕎",
  X: "𝕏",
  Y: "𝕐",
  Z: "ℤ",
};
const boldText = () => {
  var text = document.getElementById("copyValue");
  var selectionStart = text.selectionStart;
  var selectionEnd = text.selectionEnd;
  var s = text.value.substring(selectionStart, selectionEnd);
  for (letter in italicChars) {
    var b = new RegExp(italicChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in cursiveChars) {
    var b = new RegExp(cursiveChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in strikethroughChars) {
    var b = new RegExp(strikethroughChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in boldChars) {
    var c = new RegExp(letter, "g");
    var b = new RegExp(boldChars[letter], "g");
    var t = new RegExp(`ts-${letter}`, "g");
    var r = `ts-${letter}`;
    s = s.replace(c, r);
    s = s.replace(b, letter);
    s = s.replace(t, boldChars[letter]);
  }
  text.value =
    text.value.substring(0, selectionStart) +
    s +
    text.value.substring(selectionEnd);
  text.focus();
  text.setSelectionRange(selectionStart, selectionStart + s.length);
  localStorage.setItem("text", document.getElementById("copyValue").value);
  counter();
};
const italicText = () => {
  var text = document.getElementById("copyValue");
  var selectionStart = text.selectionStart;
  var selectionEnd = text.selectionEnd;
  var s = text.value.substring(selectionStart, selectionEnd);
  for (letter in boldChars) {
    var b = new RegExp(boldChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in cursiveChars) {
    var b = new RegExp(cursiveChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in strikethroughChars) {
    var b = new RegExp(strikethroughChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in italicChars) {
    var c = new RegExp(letter, "g");
    var b = new RegExp(italicChars[letter], "g");
    var t = new RegExp(`ts-${letter}`, "g");
    var r = `ts-${letter}`;
    s = s.replace(c, r);
    s = s.replace(b, letter);
    s = s.replace(t, italicChars[letter]);
  }
  text.value =
    text.value.substring(0, selectionStart) +
    s +
    text.value.substring(selectionEnd);
  text.focus();
  text.setSelectionRange(selectionStart, selectionStart + s.length);
  localStorage.setItem("text", document.getElementById("copyValue").value);
  counter();
};
const cursiveText = () => {
  var text = document.getElementById("copyValue");
  var selectionStart = text.selectionStart;
  var selectionEnd = text.selectionEnd;
  var s = text.value.substring(selectionStart, selectionEnd);
  for (letter in boldChars) {
    var b = new RegExp(boldChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in italicChars) {
    var b = new RegExp(italicChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in strikethroughChars) {
    var b = new RegExp(strikethroughChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in cursiveChars) {
    var c = new RegExp(letter, "g");
    var b = new RegExp(cursiveChars[letter], "g");
    var t = new RegExp(`ts-${letter}`, "g");
    var r = `ts-${letter}`;
    s = s.replace(c, r);
    s = s.replace(b, letter);
    s = s.replace(t, cursiveChars[letter]);
  }
  text.value =
    text.value.substring(0, selectionStart) +
    s +
    text.value.substring(selectionEnd);
  text.focus();
  text.setSelectionRange(selectionStart, selectionStart + s.length);
  localStorage.setItem("text", document.getElementById("copyValue").value);
  counter();
};
const doublestruckText = () => {
  var text = document.getElementById("copyValue");
  var selectionStart = text.selectionStart;
  var selectionEnd = text.selectionEnd;
  var s = text.value.substring(selectionStart, selectionEnd);
  for (letter in boldChars) {
    var b = new RegExp(boldChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in italicChars) {
    var b = new RegExp(italicChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in cursiveChars) {
    var b = new RegExp(cursiveChars[letter], "g");
    s = s.replace(b, letter);
  }
  for (letter in strikethroughChars) {
    var c = new RegExp(letter, "g");
    var b = new RegExp(strikethroughChars[letter], "g");
    var t = new RegExp(`ts-${letter}`, "g");
    var r = `ts-${letter}`;
    s = s.replace(c, r);
    s = s.replace(b, letter);
    s = s.replace(t, strikethroughChars[letter]);
  }
  text.value =
    text.value.substring(0, selectionStart) +
    s +
    text.value.substring(selectionEnd);
  text.focus();
  text.setSelectionRange(selectionStart, selectionStart + s.length);
  localStorage.setItem("text", document.getElementById("copyValue").value);
  counter();
};
