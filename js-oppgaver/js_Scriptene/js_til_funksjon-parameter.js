// dene er til: Innføring i programmering
function bereng5(){
    let veIkke = parseInt(document.getElementById("tall5").value);
    let c = (veIkke * 5) ;
    Svar5.innerHTML = c;
}

//dene er til: RenteFunksjon

function bereng(){
    let ins1 = parseInt(document.getElementById("is").value)
    let ins = parseInt(document.getElementById("is").value)
    let r = parseInt(document.getElementById("r").value)
    let aar = parseInt(document.getElementById("aar").value)
    let svar7 = document.getElementById("svar7")
   
    for(let i = 0; i < aar; i++){
       ins *= ((r/100) + 1);
    }
   
    svar7.innerHTML = "Ved å sette inn " + Math.round(ins1) + " vil innestående beløp bli kr: " + Math.round(ins) + "       "+ aar +" år med rentesats: " + r + "% ";
}


//dene er for: tekst som parameter til en funksjon. delen av html-en

let fnavn = document.getElementById("fnavn");
let enavn = document.getElementById("enavn");





//tildeler handlers til feltene
fnavn.onfocus = focusfnavn;
fnavn.onblur = blurfnanv;
enavn.onfocus = focusenavn;
enavn.onblur = blurenanv;

function focusfnavn() {
    fnavn.style.backgroundColor = "yellow";
    this.placeholder ="Fornavn";
}

function blurfnanv() {
    fnavn.style.backgroundColor = "";
    this.placeholder = "";
}

function focusenavn() {
    enavn.style.backgroundColor = "yellow";
    this.placeholder ="Etternavn";
}

function blurenanv() {
    enavn.style.backgroundColor = "";
    this.placeholder = "";
}

function add() {
    //hente input navnene som skal skrives ut
    var fnavn = document.getElementById("fnavn").value;
    var enavn = document.getElementById("enavn").value;
    svar6.innerHTML += (fnavn + "" + enavn + "<br>")
}

//gjør son at teksten i input boxene blir birte eller reset
let fnavnInput = document.getElementById("fnavn");
let enavnInput = document.getElementById("enavn");
 
 
let resetButton = document.getElementById("tek");
 
 
resetButton.addEventListener("click", function() {
 
    fnavnInput.value = "";
    enavnInput.value = "";
});