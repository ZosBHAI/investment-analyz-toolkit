function calculate() {
  const mode = document.getElementById("mode").value;
  const ar = parseFloat(document.getElementById("absoluteReturn").value);
  const kInput = parseFloat(document.getElementById("kValue").value);
  const years = parseFloat(document.getElementById("years").value);

  const resultEl = document.getElementById("result");
  const explanationEl = document.getElementById("explanation");

  if (!years || years <= 0) {
    alert("Please enter valid duration in years");
    return;
  }

  let K;

  if (mode === "absolute") {
    if (isNaN(ar)) {
      alert("Please enter Absolute Return");
      return;
    }
    K = 1 + ar / 100;
    explanationEl.innerText =
      `${ar}% return in ${years} years`;
  } else {
    if (isNaN(kInput) || kInput < 1) {
      alert("Please enter valid K × value (≥ 1)");
      return;
    }
    K = kInput;
    explanationEl.innerText =
      `${K}× money in ${years} years`;
  }

  const rate = Math.pow(K, 1 / years) - 1;
  const ratePercent = (rate * 100).toFixed(2);

  resultEl.innerText = `${ratePercent} % p.a.`;
}

