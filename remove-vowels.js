const inputIn = document.getElementById('input-sent-remove-vowels');
const btnSend = document.getElementById('btn-remove-vowels');
const outputReturn = document.getElementById('output-js');
let funRemoveV = document.getElementById("function-remove-vowels");
let myFormRemoveV = false;


function openCloseBookFun() {
  if (myFormRemoveV == false) {
    funRemoveV.style.height = "100%";
    myFormRemoveV = true;
  } else if (myFormRemoveV == true) {
    funRemoveV.style.height = "0%";
    myFormRemoveV = false;
  }
}


function removeVowels(word) {
    let remove = '';
    for (let i = 0; i < word.length; i++){
      const allCases = word[i].toLowerCase();  
      if (
         allCases !== 'a' 
      && allCases !== 'e'   
      && allCases !== 'i'
      && allCases !== 'o' 
      && allCases !== 'u'
      )
        remove += allCases;
  }      
  return remove;
}  

btnSend.addEventListener('click',function() {
    const inputValue = inputIn.value;
    console.log(inputValue);
    outputReturn.innerHTML = removeVowels(inputValue);
});    

