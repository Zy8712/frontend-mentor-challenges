
var bonusModeActive = false;
var winCounter = 0;

window.onload = function () {
    var rulesButton = document.getElementById("rules-button");
    rulesButton.addEventListener("click", showRules);

    var closeRulesButton = document.getElementById("close-rules");
    closeRulesButton.addEventListener("click", closeRules);

    var activateBonusMode = document.getElementById("bonus-toggle");
    activateBonusMode.addEventListener("click", changeModes);

    var paperSelected = document.getElementById("paper-button");
    paperSelected.addEventListener("click", () => {
        moveOptionSelected("1");
    });
    var scissorsSelected = document.getElementById("scissors-button");
    scissorsSelected.addEventListener("click", () => {
        moveOptionSelected("2");
    });
    var rockSelected = document.getElementById("rock-button");
    rockSelected.addEventListener("click", () => {
        moveOptionSelected("3");
    });
    var lizardSelected = document.getElementById("lizard-button");
    lizardSelected.addEventListener("click", () => {
        moveOptionSelected("4");
    });
    var spockSelected = document.getElementById("spock-button");
    spockSelected.addEventListener("click", () => {
        moveOptionSelected("5");
    });

    var playAgainButton = document.getElementById("play-again-button");
    playAgainButton.addEventListener("click", playAgain);
}

function showRules() {
    var panelRules = document.getElementById("rules-panel");
    panelRules.className = "rulesPanel";

    if (bonusModeActive == true) {
        var ruleSet = document.getElementById("rules-bonus");
        ruleSet.className = "displayRules bonusRules";
    }
    else {
        var ruleSet = document.getElementById("rules");
        ruleSet.className = "displayRules";
    }
}

function closeRules() {
    var panelRules = document.getElementById("rules-panel");
    panelRules.className = "rulesPanel displayNone";

    if (bonusModeActive == true) {
        var ruleSet = document.getElementById("rules-bonus");
        ruleSet.className = "displayNone";
    }
    else {
        var ruleSet = document.getElementById("rules");
        ruleSet.className = "displayNone";
    }
}

function changeModes() {
    console.log("change modes");
    if (bonusModeActive == false) {
        console.log("change to true");
        bonusModeActive = true;
        alterModeButton();
        alterMoveOptions();
    }
    else {
        console.log("change to false");
        bonusModeActive = false;
        alterModeButton();
        alterMoveOptions();
    }
}

function alterModeButton() {
    var modeText = document.getElementById("mode-text-indicater");
    var plusIcon = document.getElementById("activate-bonus");
    var minusIcon = document.getElementById("deactivate-bonus");

    if (bonusModeActive == true) {
        modeText.innerHTML = "Bonus Mode";
        plusIcon.className = "displayNone";
        minusIcon.className = "";
    }
    else {
        modeText.innerHTML = "Standard Mode";
        plusIcon.className = "";
        minusIcon.className = "displayNone";
    }
}

function alterMoveOptions() {
    var moveOptions = document.getElementById("game-options-screen");
    var paperButton = document.getElementById("paper-button");
    var scissorsButton = document.getElementById("scissors-button");
    var rockButton = document.getElementById("rock-button");
    var lizardButton = document.getElementById("lizard-button");
    var spockButton = document.getElementById("spock-button");

    var moveTextOptions = document.getElementsByClassName("options-label");


    if (bonusModeActive == true) {
        moveOptions.className = "game-options-screen-layout game-options-screen-bonus-layout";
        paperButton.className = "player-move-option-standard paper-button-bonus bonus-mode-button-modification";
        scissorsButton.className = "player-move-option-standard scissors-button-bonus bonus-mode-button-modification";
        rockButton.className = "player-move-option-standard rock-button-bonus bonus-mode-button-modification";
        lizardButton.className = "player-move-option-standard lizard-button-bonus bonus-mode-button-modification";
        spockButton.className = "player-move-option-standard spock-button-bonus bonus-mode-button-modification";

        moveTextOptions[0].classList.add("reduced-font-size");
        var additionalText = moveTextOptions[0].getElementsByClassName("displayNone");
        var copyArray = Array.from(additionalText);    
        for(var i = 0; i <= copyArray.length; i++){
            copyArray[i].className = "displayBlock";
        }
    }
    else {
        moveOptions.className = "game-options-screen-layout";
        paperButton.className = "player-move-option-standard paper-button-standard";
        scissorsButton.className = "player-move-option-standard scissors-button-standard";
        rockButton.className = "player-move-option-standard rock-button-standard";
        lizardButton.className = "displayNone";
        spockButton.className = "displayNone";

        moveTextOptions[0].classList.remove("reduced-font-size");
        var additionalText = moveTextOptions[0].getElementsByClassName("displayBlock");
        var copyArray = Array.from(additionalText);   
        for(var i = 0; i <= copyArray.length; i++){
            copyArray[i].className = "displayNone";
        }
    }
}

function moveOptionSelected(val) {
    var buttonOptionsClass = ["paper-button-selected", "scissors-button-selected", "rock-button-selected", "lizard-button-selected", "spock-button-selected"];

    var moveOptions = document.getElementById("game-options-screen");
    moveOptions.className = "displayNone";

    var resultsScreen = document.getElementById("results-screen");
    resultsScreen.className = "selection-process";
    
    var resultsScreenContent = document.getElementById("results-screen-content");

    var bonusButton = document.getElementById("bonus-toggle");
    bonusButton.className = "displayNone";

    var playerSelectedOption = document.getElementById("player-section");
    playerSelectedOption.className = "player-move-option-standard-results " + buttonOptionsClass[val - 1];

    var randomNum = 0;

    setTimeout(() => {
        var placeholderCircle = document.getElementById("placeholder");
        placeholderCircle.className = "displayNone";

        var computerSelectedOption = document.getElementById("computer-section");
        if (bonusModeActive == false) {
            randomNum = Math.ceil(Math.random() * 3);
        }
        else {
            randomNum = Math.ceil(Math.random() * 5);
        }
        computerSelectedOption.className = "player-move-option-standard-results " + buttonOptionsClass[randomNum - 1];

    }, 3000);

    setTimeout(() => {
        checkWinLogic(val, randomNum);
        resultsScreen.classList.add("expanded-state");
        resultsScreenContent.classList.add("expanded-state");
    }, 4500);

    setTimeout(() => {
        displayGameResult();

    }, 6000);


}

function checkWinLogic(playerChoice, computerChoice) {
    var textOutcome = document.getElementById("results-text-outcome");
    var scoreCounter = document.getElementById("score-counter");

    if (playerChoice == computerChoice) {
        textOutcome.innerHTML = "its a tie";
    }

    else if (bonusModeActive == false) {
        if (
            (playerChoice == 1 && computerChoice == 3) || // Paper beats rock
            (playerChoice == 2 && computerChoice == 1) || // Scissors beats paper
            (playerChoice == 3 && computerChoice == 2)    // Rock beats scissors
        ) {
            textOutcome.innerHTML = "you win";
            winCounter++;
            scoreCounter.innerHTML = winCounter;
        }
        else {
            textOutcome.innerHTML = "you lose";
        }
    }
    else {
        if (
            (playerChoice == 1 && (computerChoice == 3 || computerChoice == 5)) || // Paper beats rock and Spock
            (playerChoice == 2 && (computerChoice == 1 || computerChoice == 4)) || // Scissors beats paper and lizard
            (playerChoice == 3 && (computerChoice == 2 || computerChoice == 4)) || // Rock beats scissors and lizard
            (playerChoice == 4 && (computerChoice == 1 || computerChoice == 5)) || // Lizard beats Spock and paper
            (playerChoice == 5 && (computerChoice == 3 || computerChoice == 2))    // Spock beats rock and scissors
        ) {
            textOutcome.innerHTML = "you win";
            winCounter++;
            scoreCounter.innerHTML = winCounter;
        }
        else {
            textOutcome.innerHTML = "you lose";
        }
    }
}

function displayGameResult(){
    var resultsText = document.getElementById("results-text");
    resultsText.classList.add("results-text-display");

    resultsText.classList.add("fadeIn");
}

function playAgain(){
    var resultsText = document.getElementById("results-text");
    resultsText.className = "displayNone";

    var resultsScreen = document.getElementById("results-screen");
    var resultsScreenContent = document.getElementById("results-screen-content");

    resultsScreen.className = "displayNone";
    resultsScreenContent.className = "selection-process-content";

    var placeholderCircle = document.getElementById("placeholder");
    placeholderCircle.className = "placeholder-circle";

    var computerSelectedOption = document.getElementById("computer-section");
    computerSelectedOption.className = "displayNone";

    var bonusButton = document.getElementById("bonus-toggle");
    bonusButton.className = "bonus-mode-toggle-box";

    var moveOptions = document.getElementById("game-options-screen");
    if (bonusModeActive == true){
        moveOptions.className = "game-options-screen-layout game-options-screen-bonus-layout";
    }
    else{
        moveOptions.className = "game-options-screen-layout";
    }
}