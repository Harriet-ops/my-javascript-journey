
function calculate() {
  const birthYear = Number(document.getElementById('year').value);
  const futureYear = Number(document.getElementById('futureyear').value);
  const output = document.getElementById('new');

  if (!birthYear || !futureYear) {
    output.textContent = 'Please enter both years.';
    return;
  }

  if (birthYear > 2025) {
    output.textContent = 'Birth year cannot be greater than 2025.';
    return;
  }

  if (futureYear <= 2025) {
    output.textContent = 'Future year must be after 2025.';
    return;
  }

  const newAge = futureYear - birthYear;
  output.textContent = 'Your new age will be ' + newAge;
}


document.getElementById('submitBtn').addEventListener('click', calculate);
