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