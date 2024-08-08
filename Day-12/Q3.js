let reverseString = (name) => {
  let a = name.length-1;

  let c = "";
  for (x = a; x >= 0; x--) {
    b = name[x];
    c += b;
  }
  console.log(c);
};

reverseString("hello");
