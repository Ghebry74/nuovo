let step = 0;

// Livello 1: cliccare dendriti → corpo → assone
document.querySelectorAll(".click-zone").forEach(zone => {
  zone.addEventListener("click", () => {
    const expected = parseInt(zone.dataset.step);
    if (expected === step + 1) {
      step++;
      moveImpulso(zone);
      if (step === 3) {
        alert("Potenziale d'azione generato! Passiamo alla sinapsi.");
        document.getElementById("vescicole").style.display = "block";
      }
    } else {
      alert("Ordine sbagliato! Riprova.");
    }
  });
});

function moveImpulso(zone) {
  const impulso = document.getElementById("impulso");
  impulso.style.left = zone.offsetLeft + "px";
  impulso.style.top = zone.offsetTop + "px";
}

// Livello 3: Drag vescicole sinaptiche
const vesc = document.getElementById("vescicole");
const zone = document.getElementById("sinapsi-zone");

vesc.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", "vesc");
});

zone.addEventListener("dragover", e => e.preventDefault());

zone.addEventListener("drop", e => {
  e.preventDefault();
  moveImpulso(zone);
  alert("Neurotrasmettitori rilasciati! Passiamo al motoneurone.");
  document.getElementById("fibra-muscolare").style.background = "orange";
  document.getElementById("quiz").style.display = "block";
});

// Quiz
function controllaQuiz() {
  let punteggio = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "sinapsi") punteggio++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "acetilcolina") punteggio++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "trasmettere muscoli") punteggio++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "tutte") punteggio++;

  alert("Hai totalizzato " + punteggio + "/4 punti! 🎉");
}