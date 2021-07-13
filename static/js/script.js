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