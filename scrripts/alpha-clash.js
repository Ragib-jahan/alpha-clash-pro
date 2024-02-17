// function play (){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // stop the gam if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedAlphabet = currentAlphabetElement.innerText;
    // console.log(expectedAlphabet);

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        const currentScore = getElementValueByIs('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);






        //--------------------------------------------

        // // update score 
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        //-----------------------------------------------

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else {
        const currentScore = getElementValueByIs('current-life');
        const newLife = currentScore - 1;
        setTextElementValueById('current-life', newLife);
        if (newLife === 0) {
            gameOver();
        }

        //---------------------------------------------
        // console.log('you missed. you lost a life')
        // // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
        // if (newLife === 0) {
        //     gameOver();
        // }

        //--------------------------------------------------
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}


function play() {
    // hide everything show only the play-ground
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('score');

    //update final score
    // 1.get the final score
    const lastScore = getElementValueByIs('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getTextElementValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}