const text = document.querySelector(".fancy"); //select class fancy
const strText = text.textContent; //getting the content of class fancy
const splitText = strText.split(""); //split individual text of class fancy into array
text.textContent = ""; //remove the h1

// for loop to add span and individual char of splitText
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50); //run every 50 miliseconds

function onTick(){
    const span = text.querySelectorAll('span')[char]; //selecting every span tag from index 0 to the last index, cause it's an array
    span.classList.add('fade'); //add class fade to the span tag
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}