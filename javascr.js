function checkAnswer(answer) {

  const result = document.getElementById("result");

  if (answer === 'a') {

    result.textContent = "✅ Correct! Around 8 million tons of plastic enter the ocean each year.";

  } else {

    result.textContent = "❌ Not quite. The correct answer is 8 million tons.";

  }

}