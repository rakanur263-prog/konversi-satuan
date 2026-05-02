const lengthUnits = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  mile: 1609.34,
  yard: 0.9144,
  foot: 0.3048,
  inch: 0.0254
};

const weightUnits = {
  gram: 1,
  kilogram: 1000,
  milligram: 0.001,
  ton: 1000000,
  ounce: 28.3495,
  pound: 453.592
};

const tempUnits = ["celsius", "fahrenheit", "kelvin", "reamur"];

function populateSelect(id, units) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  for (let u in units) {
    const opt = document.createElement("option");
    opt.value = u;
    opt.textContent = u;
    el.appendChild(opt);
  }
}

function populateTemp(id) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  tempUnits.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u;
    opt.textContent = u;
    el.appendChild(opt);
  });
}

window.onload = () => {
  populateSelect("inputUnitLength", lengthUnits);
  populateSelect("toLength", lengthUnits);
  populateSelect("inputUnitWeight", weightUnits);
  populateSelect("toWeight", weightUnits);
  populateTemp("inputUnitTemp");
  populateTemp("toTemp");
};

function animateResult(id, value) {
  const el = document.getElementById(id);
  el.classList.remove("show");

  setTimeout(() => {
    el.textContent = isNaN(value)
      ? "Masukkan angka yang valid"
      : Number(value).toFixed(4);
    el.classList.add("show");
  }, 150);
}

function convertLength() {
  const input = parseFloat(document.getElementById("inputLength").value);
  const from = document.getElementById("inputUnitLength").value;
  const to = document.getElementById("toLength").value;

  const result = input * lengthUnits[from] / lengthUnits[to];
  animateResult("resultLength", result);
}

function convertWeight() {
  const input = parseFloat(document.getElementById("inputWeight").value);
  const from = document.getElementById("inputUnitWeight").value;
  const to = document.getElementById("toWeight").value;

  const result = input * weightUnits[from] / weightUnits[to];
  animateResult("resultWeight", result);
}

function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("inputUnitTemp").value;
  const to = document.getElementById("toTemp").value;

  let c;

  if (from === "celsius") c = input;
  else if (from === "fahrenheit") c = (input - 32) * 5/9;
  else if (from === "kelvin") c = input - 273.15;
  else if (from === "reamur") c = input * 5/4;

  let result;

  if (to === "celsius") result = c;
  else if (to === "fahrenheit") result = (c * 9/5) + 32;
  else if (to === "kelvin") result = c + 273.15;
  else if (to === "reamur") result = c * 4/5;

  animateResult("resultTemp", result);
}