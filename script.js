const expressionInput = document.getElementById('expression');
const resultInput = document.getElementById('result');

function append(value) {
  expressionInput.value += value;
  liveEvaluate();
}

function clearDisplay() {
  expressionInput.value = '';
  resultInput.value = '';
}

function backspace() {
  expressionInput.value = expressionInput.value.slice(0, -1);
  liveEvaluate();
}

function calculate() {
  try {
    resultInput.value = eval(expressionInput.value);
  } catch {
    resultInput.value = 'Error';
  }
}

function liveEvaluate() {
  try {
    if (expressionInput.value.trim() !== '') {
      resultInput.value = eval(expressionInput.value);
    } else {
      resultInput.value = '';
    }
  } catch {
    resultInput.value = '';
  }
}
//keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9+\-*/().]/.test(key)) {
    event.preventDefault();
    append(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    backspace();
  }
});