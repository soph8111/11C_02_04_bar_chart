"use strict";

let array = [6, 12, 34, 9, 32, 5, 22, 28, 11, 23, 3, 21, 37, 21, 40, 32, 6, 8, 32, 16, 37, 21, 12, 17, 1, 14, 37, 31, 22, 14, 14, 19, 21, 1, 32, 40, 12, 14, 5, 12];

console.log(array.length);
init();

function init() {
  console.log("init");

  loop();
}

function loop() {
  console.log("loop");
  // Kør displayData og scrollArray i et loop

  customerNumber();
}

function customerNumber() {
  console.log("customerNumber");
  displayData();
}

function displayData() {
  console.log("displayData");
  // bar 1 = array[0]
  // let div = document.createElement("div");

  //document.querySelector("#bars").firstElementChild.value = array[1];
  //   for (let i = 0; i < 40; i++) {
  //     console.log("forloop");
  //     document.querySelectorAll("div.bar").innerHTML = array[i];
  //     console.log(array[i]);
  //   }

  for (let i = 0; i < 40; i++) {
    console.log("forloop");
    let div = document.createElement("div");
    div.style.height = `${array[i] * 2}px`;
    document.querySelector("#bars").appendChild(div).className = "bar";
  }

  scrollArray();
}

function scrollArray() {
  console.log("scrollArray");
  // Array flytter mod venstre, og der tilføjes nyt tal til enden.

  array.push(12);
  array.shift();
  // console.log(array.length);
  //console.log(array.slice(1, 41));
}
