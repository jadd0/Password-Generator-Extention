const passString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`! @#$%^&*()_-+={[}]|\:;\"'<,>.?/"
let string = ''

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const inp = document.getElementById('sliderVal');
  slider.addEventListener('input', () => {
    const value = document.getElementById('slider').value
    inputChange(value)
  });
  inp.addEventListener('focusout', () => {
    const value = document.getElementById('sliderVal').value
    sliderChange(value)
  })
});

function displayPassword(value) {
  const password = createPassword(value)
  document.getElementById('password').innerHTML = password
}

function inputChange(value) {
  document.getElementById('sliderVal').value = value;
  displayPassword(value);
}

function sliderChange(value) {
  document.getElementById('slider').value = value;
  displayPassword(value);
}

function createPassword(length) {
  string = ''
  for (let i = 0; i < length; i++) {
    string += passString[Math.floor(Math.random() * passString.length)]
    console.log(string)
  }
  return string;
}