var translateInput = document.querySelector('#translate-inp');
var translateBtn = document.querySelector('#translate-btn');
var translateOutput = document.querySelector('#translate-out');

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function translationUrl(text) {
    return url + "?text=" + text;
}

function clickHandler() {

    var userInput = translateInput.value;
    console.log(userInput);

    fetch(translationUrl(userInput)).then(response => response.json()).then(json => {
        translateOutput.innerText = json.contents.translated;
    }).catch(err => console.log(error));
}

translateBtn.addEventListener('click', clickHandler);