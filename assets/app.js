let input = document.getElementById('text-input');
let para = document.getElementById('total-characters');
let para1 = document.getElementById('remaining-characters');
const startTotalCharacters = 0;
const startRemainingCharacters = 50; 

input.addEventListener('input', () => {
    para.innerHTML = `Total characters:${startTotalCharacters + input.value.length}`;
    para1.innerHTML = `Remaining:${startRemainingCharacters - input.value.length}`;
})