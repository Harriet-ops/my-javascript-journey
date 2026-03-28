function calculate() {
  const game = Number(document.getElementById('num').value);
  
  const output = document.getElementById('word');


  if (game%2 === 0) {
    output.innerHTML = 'You have an even number';
    return;
  } else(game%2 !== 0);{
    output.textContent = 'You have an odd number';
    return;
 }

}

document.getElementById('submitBtn').addEventListener('click', calculate);