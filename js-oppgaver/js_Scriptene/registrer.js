
var fnavn = document.getElementById("fnavn");
var enavn = document.getElementById("enavn");
var bosted = document.getElementById("bo");
var gano = document.getElementById("gno");
var pno = document.getElementById("pno");
var psted = document.getElementById("psted");
var prtel1 = document.getElementById("ptel");
var artel1 = document.getElementById("atel");
var epost = document.getElementById("epo");
var avdel = document.getElementById("avd");
var preview = document.getElementById("preview");

//ansatteregister for å legge til ansatte
var ansatteListe = []

//tildele handlers til feltene
fnavn.onfocus = focusfnavn;
fnavn.onblur = blurfnavn;
enavn.onfocus = focusenavn;
enavn.onblur = blurenavn;
bosted.onfocus = focusbosted;
bosted.onblur = blurbosted;
gano.onfocus = focusgano;
gano.onblur = blurgano;
pno.onfocus = focuspno;
pno.onblur = blurpno;
psted.onfocus = focuspsted;
psted.onblur = blurpsted;
prtel1.onfocus = focusprtel1;
prtel1.onblur = blurprtel1;
artel1.onfocus = focusartel1;
artel1.onblur = blurartel1;
epost.onfocus = focusepost;
epost.onblur = blurepost;
avdel.onfocus = focusavdel;
avdel.onblur = bluravdel;







function focusfnavn() {
    fnavn.style.backgroundColor = "yellow";
    this.placeholder = "Fornavn";
}

function blurfnavn() {
    fnavn.style.backgroundColor = "";
    this.placeholder = "";
}
function focusenavn() {
    enavn.style.backgroundColor = "yellow";
    this.placeholder = "Etternavn";
}

function blurenavn() {
    enavn.style.backgroundColor = "";
    this.placeholder = "";
}
function focusbosted() {
    bosted.style.backgroundColor = "yellow";
    this.placeholder = "Bosted";
}

function blurbosted() {
    bosted.style.backgroundColor = "";
    this.placeholder = "";
}
function focusgano() {
    gano.style.backgroundColor = "yellow";
    this.placeholder = "Gatenumer";
}

function blurgano() {
    gano.style.backgroundColor = "";
    this.placeholder = "";
}
function focuspno() {
    pno.style.backgroundColor = "yellow";
    this.placeholder = "Postnumer";
}

function blurpno() {
    pno.style.backgroundColor = "";
    this.placeholder = "";
}
function focuspsted() {
    psted.style.backgroundColor = "yellow";
    this.placeholder = "Poststed";
}

function blurpsted() {
    psted.style.backgroundColor = "";
    this.placeholder = "";
}
function focusprtel1() {
    prtel1.style.backgroundColor = "yellow";
    this.placeholder = "Telefonnumer";
}

function blurprtel1() {
    prtel1.style.backgroundColor = "";
    this.placeholder = "";
}
function focusartel1() {
    artel1.style.backgroundColor = "yellow";
    this.placeholder = "Tlf arbeid";
}

function blurartel1() {
    artel1.style.backgroundColor = "";
    this.placeholder = "";
}
function focusepost() {
    epost.style.backgroundColor = "yellow";
    this.placeholder = "Email";
}

function blurepost() {
    epost.style.backgroundColor = "";
    this.placeholder = "";
}
function focusavdel() {
    avdel.style.backgroundColor = "yellow";
   
}

function bluravdel() {
    avdel.style.backgroundColor = "";
   
}

//funksjon for å øegge til en ny ansatt i listen og hente verdier
var listAnsatt = [];
var ansattelist = []

function add() {
    //hente verdier
    
    var fnavn_v = fnavn.value;
    var enavn_v = enavn.value;
    var bosted_v = bosted.value;
    var gano_v = gano.value;
    var pno_v = pno.value;
    var psted_v = psted.value;
    var prtel1_v = prtel1.value;
    var artel1_v = artel1.value;
    var epost_v = epost.value;
    var avdel_v = avdel.value;

    //Validere skjema
    if(fnavn_v.length <= 1) {
        alert("Du må skrive inn ditt fornavn.");
        focusfnavn();
        return false;
    }
    
    if(enavn_v.length <=1) {
    alert("Du må skrive inn etternavnet ditt.");
    focusenavn();
    return false;
    }
    if(bosted_v == "") {
        alert("Du har glemt og skrive bostedet ditt!");
        focusbosted();
        return false;
    }
    if(gano_v.length <= 0) {
        alert("Skrive in gatenumeret ditt!!");
        focusgano();
        return false;
    }
    if(pno_v.length <= 3) {
        pno_v.length = /[0-9]/;
        alert("skriv in postnumer, fire siffre!!");
        focuspno();
        return false;
    }
    if(psted_v == "") {
        alert("skriv in possted");
        focuspsted();
        return false;
    }
    if(prtel1_v.length <= 7) {
        prtel1.length = /[0-9]/;
        alert("skriv in tlf, åtte siffer.");
        focusprtel1();
        return false;
    }
    if(artel1_v.length <= 7) {
        artel1.length = /[0-9]/;
        alert("skriv in tlf, åtte siffer.");
        focusartel1();
        return false;
    }
    if(epost_v.length <= 5 || epost_v.indexOf("@") === -1) {
        //skjekker for lengde og at @ er skrevet in
        alert("skriv in epost.");
        focusepost();
        return false
    }
    if(avdel_v == "") {
        alert("velg den bilen du vil teste.");
        focusavdel();
        return false;
    }

    //legge til de som registrer seg
    var ansatte = [fnavn_v, enavn_v, bosted_v, gano_v, pno_v, psted_v, prtel1_v, artel1_v, epost_v, avdel_v];

    //legetil ansate i listAnsatt
    listAnsatt.push(ansatte);
    //document.getElementById("preview").innerHTML = ansatte;

    //vis informasjon p, de ansatte i preview
    vislistAnsatt();
}

function vislistAnsatt() {
    //tømmer preview først
    preview.innerHTML = "";
    // går igjennom infoen av de som er registrert
    for(i=0; i < listAnsatt.length; i++) {
    //vis den ansate på siden
    visArbeidere(listAnsatt[i]);
    }
    
}
function visArbeidere(ansatte) {
//lager et element for å vise på websiden
var div = document.createElement("div");
var ul = document.createElement("ul");
var ula = document.createElement("ul");
var navn = document.createElement("li");
var adresse = document.createElement("li");
var postnr = document.createElement("li");
var tlf = document.createElement("li");
var avde = document.createElement("li");
var poste = document.createElement("li");

// inhold i visningen ac de ansatte
navn.innerHTML = "Navn: " + ansatte[0] + " " + ansatte[1];
adresse.innerHTML = "Adresse: " + ansatte[2] + " " + ansatte[3];
postnr.innerHTML = "Poststed: " + ansatte[4] + " " + ansatte[5];
tlf.innerHTML = "Privat tlf: " + ansatte[6] + " " + " " + "arbeids tlf: " + " " + ansatte[7];
poste.innerHTML = "E-mail: " + ansatte[8];
avde.innerHTML = "Ønsket bil for prøveskjøring: " + " " + ansatte[9];


//leger elementer i HTML. 
//legger li til ul
ul.appendChild(navn);
ula.appendChild(adresse);
ula.appendChild(postnr);
ula.appendChild(tlf);
ula.appendChild(poste);
ul.appendChild(avde);

div.appendChild(ul);
div.appendChild(ula);
div.setAttribute("id","reset");

ula.style.display = "none";
preview.appendChild(div);
div.onmouseover = mover;
div.onmouseout = mout;

}


function mover() {
    console.log("I'm showing more info");
    this.childNodes[1].style.display = "block";
}
function mout() {
    console.log("I'm showing less info");
    this.childNodes[1].style.display = "none";
}
