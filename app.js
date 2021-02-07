const btn = document.querySelector("#btn"),
  out = document.querySelector("#out"),
  weight = document.querySelector("#weight"),
  vol = document.querySelector("#vol"),
  load = document.querySelector("#load"),
  // del = document.querySelector('#del'),
  frag = document.querySelector("#frag"),
  range = document.querySelector("#range"),
  distance = (document.querySelector(".distance").innerHTML = 10);
(kg = 5.5), (kub = 3500), (km = 2);

// range slider
range.onchange = function () {
  distance = document.querySelector(".distance").innerHTML = range.value;
};
// Basic function
btn.onclick = function () {
  if (weight.value !== "" && vol.value !== "") {
    if (load.checked) {
      load.value = 1500;
    } else {
      load.value = 0;
    }
    // if (del.checked){
    //     del.value = 3500; }
    // else
    // {
    //     del.value = 0;
    // }
    if (frag.checked) {
      frag.value = 2000;
    } else {
      frag.value = 0;
    }

    out.innerHTML =
      weight.value * kg +
      vol.value * kub +
      Number(load.value) +
      Number(frag.value) +
      range.value * km;
  } else {
    alert("Введіть дані по вантажу");
    // throw new Error('Could not parse input');
  }
};
