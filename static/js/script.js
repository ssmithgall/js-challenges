//Challenge 1: Age in Days

function ageInDays() {
    let birthYear = prompt("What year were you born?");
    let numberOfDays = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + numberOfDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2
function generatePic() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-pic-gen');
    image.src = "https://picsum.photos/200/300?random=1";
    div.appendChild(image);
}

function resetPic() {
    document.getElementById('flex-pic-gen').remove();
}


//Rock, Paper, Scissors, Lizard, Spock
function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randomRps());
    console.log('Computer choice', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);  // {'message': 'You won!', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRps() {
    return Math.floor(Math.random() * 4);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors', 'lizard', 'spock'][number];
}

/*
function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0, 'lizard': 1, 'spock': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5, 'lizard':0, 'spock': 1},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1, 'lizard': 1, 'spock': 0},
        'lizard': {'scissors': 0, 'rock': 0, 'paper': 1, 'lizard': 0.5, 'spock': 1},
        'spock': {'scissors': 1, 'rock': 1, 'paper': 0, 'lizard': 0, 'spock': 0.5}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore= rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}
*/


function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 2, 'lizard': 3, 'spock': 4},
        'paper': {'scissors': 5, 'rock': 6, 'paper': 0.5, 'lizard':7, 'spock': 8},
        'scissors': {'scissors': 0.5, 'rock': 9, 'paper': 10, 'lizard': 11, 'spock': 12},
        'lizard': {'scissors': 13, 'rock': 14, 'paper': 15, 'lizard': 0.5, 'spock': 16},
        'spock': {'scissors': 17, 'rock': 18, 'paper': 19, 'lizard': 20, 'spock': 0.5}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore= rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 1) {
        return {'message': 'Rock Crushes Scissors!', 'color': 'green'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else if (yourScore === 2) {
        return {'message': 'Paper Covers Rock!', 'color': 'red'};
    } else if (yourScore === 3) {
        return {'message': 'Rock Crushes Lizard!', 'color': 'green'};
    } else if (yourScore === 4) {
        return {'message': 'Spock Vaporizes Rock!', 'color': 'red'};
    } else if (yourScore === 5) {
        return {'message': 'Scissors Cuts Paper!', 'color': 'red'};
    } else if (yourScore === 6) {
        return {'message': 'Paper Covers Rock!', 'color': 'green'};
    } else if (yourScore === 7) {
        return {'message': 'Lizard Eats Paper!', 'color': 'red'};
    } else if (yourScore === 8) {
        return {'message': 'Paper Disproves Spock!', 'color': 'green'};
    } else if (yourScore === 9) {
        return {'message': 'Rock Crushes Scissors!', 'color': 'red'};
    } else if (yourScore === 10) {
        return {'message': 'Scissors Cuts Paper!', 'color': 'green'};
    } else if (yourScore === 11) {
        return {'message': 'Scissors Decapitates Lizard!', 'color': 'green'};
    } else if (yourScore === 12) {
        return {'message': 'Spock Smashes Scissors!', 'color': 'red'};
    } else if (yourScore === 13) {
        return {'message': 'Scissors Decapitates Lizard!', 'color': 'red'};
    } else if (yourScore === 14) {
        return {'message': 'Rock Crushes Lizard!', 'color': 'red'};
    } else if (yourScore === 15) {
        return {'message': 'Lizard Eats Paper!', 'color': 'green'};
    } else if (yourScore === 16) {
        return {'message': 'Lizard Poisons Spock!', 'color': 'green'};
    } else if (yourScore === 17) {
        return {'message': 'Spock Crushes Scissors!', 'color': 'green'};
    } else if (yourScore === 18) {
        return {'message': 'Spock Vaporizes Rock!', 'color': 'green'};
    } else if (yourScore === 19) {
        return {'message': 'Paper Disproves Spock!', 'color': 'red'};
    } else if (yourScore === 20) {
        return {'message': 'Lizard Poisons Spock!', 'color': 'red'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
        'lizard': document.getElementById('lizard').src,
        'spock': document.getElementById('spock').src
    }

    //remove the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    document.getElementById('lizard').remove();
    document.getElementById('spock').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 5px 25px blue;'>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 5px 25px red;'>"
    messageDiv.innerHTML = "<h1>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}