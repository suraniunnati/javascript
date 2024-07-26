// Q1/

function Q1() {
  let a = document.getElementById("value").value;

  if (a > 0) {
    document.getElementById("p1").innerText = a + " is Positive number";
    console.log(`${a} is Positive number`);
  } else if (a == 0) {
    document.getElementById("p1").innerText = " Zero number";
    console.log(`Zero number`);
  } else {
    document.getElementById("p1").innerText = a + " is Negative number";
    console.log(`${a} is Negative number`);
  }
}

// Q2/

function Q2() {
  let a = document.getElementById("value1").value;

  if (a >= 90) {
    document.getElementById("p2").innerText = " student's grade is A";
    console.log("student's grade is A");
  } else if (a >= 80 && a <= 89) {
    document.getElementById("p2").innerText = " student's grade is B";
    console.log("student's grade is B");
  } else if (a >= 70 && a <= 79) {
    document.getElementById("p2").innerText = " student's grade is C";
    console.log("student's grade is C");
  } else if (a >= 60 && a <= 69) {
    document.getElementById("p2").innerText = " student's grade is D";
    console.log("student's grade is D");
  } else {
    document.getElementById("p2").innerText = " student's grade is E";
    console.log("student's grade is E");
  }
}

// Q3/

function Q3() {
  let leap = document.getElementById("value3").value;

  if (leap % 4 == 0 && leap % 100 == 0) {
    document.getElementById("p3").innerText = " leap year";
    console.log(`leap year`);
  } else {
    document.getElementById("p3").innerText = " Not a leap year";
    console.log(`Not a leap year`);
  }
}

// Q4/

function Q4() {
  let a = document.getElementById("value4").value;

  if (a >= 0 && a <= 90) {
    document.getElementById("p4").innerText = " First quadrants";
    console.log("First quadrants");
  } else if (a > 90 && a <= 180) {
    document.getElementById("p4").innerText = " Second quadrants";
    console.log("Second quadrants");
  } else if (a > 180 && a <= 270) {
    document.getElementById("p4").innerText = " Second quadrants";
    console.log("Third quadrants");
  } else if (a > 270 && a <= 360) {
    document.getElementById("p4").innerText = " Fourth quadrants";
    console.log("Fourth quadrants");
  } else {
    document.getElementById("p4").innerText = " fifth quadrants";
    console.log("fifth quadrants");
  }
}

// Q5/

function Q5() {
  let a = document.getElementById("value5").value;
  let b = document.getElementById("value6").value;
  let c = document.getElementById("value7").value;

  if (a == b && b == c && a == c) {
    document.getElementById("p5").innerText = " Equilateral triagle";
    console.log(`Equilateral triagle`);
  } else if (a != b && b != c && c != a) {
    document.getElementById("p5").innerText = " Scalene triagle";
    console.log(`Scalene triagle`);
  } else {
    document.getElementById("p5").innerText = " lsosceles triagle";
    console.log(`lsosceles triagle`);
  }
}
