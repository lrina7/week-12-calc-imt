const button = document.querySelector('.button');
const result = document.getElementById('result');
const more = document.getElementById('more');
const info = document.querySelector('.info');

function calculateBMI () {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let w = +(weight);
  let h = +(height);
  let bmi = w/(h * h) * 10000;
  result.textContent = bmi.toFixed(2);
  more.style.visibility = "visible";
};

button.addEventListener('click', calculateBMI);

more.onclick = function (event) {
info.style.visibility = 'visible';
};