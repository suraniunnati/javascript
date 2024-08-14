function reverseString(name) {
  let add = "";
  for (x = name.length - 1; x >= 0; x--) {
    add += name[x];
  }
  console.log(add);
}
reverseString("hello");
