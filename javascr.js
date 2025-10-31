document.getElementById('startBtn').addEventListener('click', function () {
  const hero = document.getElementById('hero');
  hero.classList.add('hidden');

  const main = document.getElementById('mainContent');
  main.classList.remove('hidden');
  main.style.opacity = 0;

  let opa = 0;
  const fade = setInterval(() => {
    opa += 0.08;
    main.style.opacity = opa;
    if (opa >= 1) clearInterval(fade);
  }, 30);

  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 120);
});

function checkAnswer(btn, section, quizNumber, correct=false) {
  const resultId = section + '-' + quizNumber;
  const resultElem = document.getElementById(resultId);
  const container = btn.closest('.quiz');
  const buttons = container.querySelectorAll('.answers button');

  if (btn.disabled) return;

  buttons.forEach(b => b.disabled = true);

  if(correct){
    btn.classList.add('correct');
    resultElem.textContent = "✅ إجابة صحيحة!";
    if(section === 'tunisia' && quizNumber === 3){
      resultElem.textContent += " هذا يعني أن 90% من النفايات إما تبقى على حالها أو تُحرَق ☹️";
    }
  } else {
    btn.classList.add('wrong');
    let correctText = "";
    buttons.forEach(b => { if(b.getAttribute('onclick').includes('true')) correctText = b.textContent; });
    resultElem.textContent = `❌ إجابة خاطئة! الإجابة الصحيحة هي: ${correctText}`;
  }
}
