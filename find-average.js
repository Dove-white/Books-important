const inputInFindA = document.getElementById('input-sent-find-average');
const btnSendFindA = document.getElementById('btn-find-average');
const outputReturnFindA = document.getElementById('output-js-find-average');
let funFindA = document.getElementById("function-find-average");
let myFormFindA = false;


function openCloseBookFunFindA() {
  if (myFormFindA == false) {
    funFindA.style.height = "100%";
    myFormFindA = true;
  } else if (myFormFindA == true) {
    funFindA.style.height = "0%";
    myFormFindA = false;
  }
}


function average(num) {
    let sum =0;

    for(let value of num)
    sum += value;

    return sum / num.length;
}  

btnSendFindA.addEventListener('click',function() {
    const inputValueFindA = inputInFindA.value;
    const numbersArray = inputValueFindA.split(',').map(Number);
    outputReturnFindA.innerHTML = average(numbersArray);
});        