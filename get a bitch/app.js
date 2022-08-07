const form = document.getElementById("form");
const numberOfBitches = document.getElementById("numberOfBitches");
const header = document.querySelector("h1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    header.innerHTML = "you got " + numberOfBitches.value + " bitch"

    if(numberOfBitches.value > 1){
        header.innerHTML = "you got " + numberOfBitches.value + " bitches"
    }
    else if(numberOfBitches.value === "" || numberOfBitches.value <= 0 ){
        header.innerHTML = "you got no bitches"
    }
})