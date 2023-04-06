// Weight variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");
// Height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");
const form = document.getElementById("bmiForm");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
    weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
    heightOutput.innerHTML = this.value;
}

weightOutput.addEventListener('click', showValWeight(this.value));
heightOutput.addEventListener('click', showValWeight(this.value));

// Change weight-slider value on weight-number input
function showValWeight(newVal) {
    weightSlider.value = newVal;
};
// Change height-slider value on height-number input
function showValHeight(newVal) {
    heightSlider.value = newVal;
};

// Change number input when dragging slider
// Add 2 eventListeners for weight and input sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
    weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
    heightOutput.value = e.srcElement.value;
}

form.addEventListener("submit", function (e) {

    function arrondir(x) {
        return Math.round(x * 100) / 100;
    }

    // Empêcher le formulaire de soumettre les données et de rafraîchir la page
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const weight = weightOutput.value;
    // car la taille est en cm, faut mettre en m
    const height = (heightOutput.value) / 100;
    let result = document.getElementById("yourbmi");
    let message = document.getElementById("evaluationMessage");

    // Calculer l'IMC
    let imc = weight / (height * height);
    imc = arrondir(imc);

    // Afficher l'IMC et la catégorie
    message.innerHTML = ""; // Clear message before calculating new BMI
    result.innerHTML = " " + imc;

    if (imc < 18.5) {
        message.innerHTML = "Categorie : Sous-poids";
    } else if (imc >= 18.5 && imc < 25) {
        message.innerHTML = "Categorie : Poids normal";
    } else if (imc >= 25 && imc < 30) {
        message.innerHTML = "Categorie : Surpoids";
    } else if (imc >= 30 && imc < 35) {
        message.innerHTML = "Categorie : Obésité modérée";
    } else if (imc >= 35 && imc < 40) {
        message.innerHTML = "Categorie : Obésité sévère";
    } else {
        message.innerHTML = "Categorie : Obésité morbide";
    }
});





