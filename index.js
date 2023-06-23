const url =
  "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=word";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ff192d86f2mshc5617dbfd1b22e9p154e8djsn8b804a1cb9ee",
    "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
  },
};

submitWord = async function () {
  const word = document.getElementById("word").value;
  console.log(word);
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
  const resultParse = JSON.parse(result)
    .definition.replace("2.", "<br>2.")
    .replace("3.", "<br>3.")
    .replace("4.", "<br>4.")
    .replace("5.", "<br>5.")
    .replace("6.", "<br>6.")
    .replace("7.", "<br>7.")
    .replace("9.", "<br>9.")
    .replace("8.", "<br>8.")
    .replace("/n", "<br>");
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  let resultText = document.getElementById("resultText");
  let resultWord = document.getElementById("wordResult");

  resultWord.innerHTML = `<H4>Word:</h4> ${capitalized}`;
  resultText.innerHTML = `<h4>Defintion:</h4> ${resultParse}`;
  document.getElementById("word").value = "";
};

// Execute a function when the user presses a key on the keyboard
addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitWord();
  }})