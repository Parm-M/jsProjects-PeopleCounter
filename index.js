
let savePl = document.getElementById("save-pl");
let countPl = document.getElementById("count-pl");
let count = 0;

function increment() {
    count += 1;
    countPl.innerText = count;
}
function decrement() {
    count -= 1;
    countPl.innerText = count;
}

function save() {
    let countStr = count + " , ";
    
    // savePl.innerText += countStr; // Issue with innerText -> unaware of hidden elements
    savePl.textContent += countStr;
    countPl.textContent = 0;
    count = 0;   
}