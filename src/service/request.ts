export function getWordOfTheDay() {
  fetch('https://palabras-aleatorias-public-api.herokuapp.com/random-by-length?length=5')
  .then(response => response.json())
  .then(data => console.log(data));

  return 'BREAK';
}