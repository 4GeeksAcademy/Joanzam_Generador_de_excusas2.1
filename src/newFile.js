window.onload = function() {
  let who = [
    "Charles Darwin",
    "Aristóteles",
    "Napoleón Bonaparte",
    "Julio César",
  ];
  let action = ["caminaba", "comia", "pintaba", "dormia"];
  let what = ["en mi silla", "en mi coche", "con el móvil", "en mi mesa"];
  let when = [
    "cuando estaba en la montaña",
    "mientras estaba en mi casa",
    "cuando caminaba por la calle",
    "mientras dormia en el campo",
  ];

  const generateExcuse = () => {
    let decimalRandom = Math.random();
    let indiceWho = Math.floor(decimalRandom * who.length);
    let indiceAction = Math.floor(decimalRandom * action.length);
    let indiceWhat = Math.floor(decimalRandom * what.length);
    let indiceWhen = Math.floor(decimalRandom * when.length);
    let wordWho = who[indiceWho];
    let wordAction = action[indiceAction];
    let wordWhat = what[indiceWhat];
    let wordWhen = when[indiceWhen];

    let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;
    return excuse;
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
