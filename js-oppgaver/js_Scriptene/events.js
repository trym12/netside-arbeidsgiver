//Først vil vi lage en div for å vise dagen og en div for å vise klokke helt øverst
function startTime() {
    let today = new Date();
    //Vi lager vareabler for time, minuter og secunder
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    //setter functionene til å skjekke timer, minutter og sekunder hele tiden
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    //Besetemme hva som skal skrives ut tekst + klokken, startTime er i milisekunder det er vanlig å bruke 0,5 sekunder (500)
    document.getElementById("klokke").innerHTML = ("klokken er nå: ") + h + ":" + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);

    //lager en function dor å sjkke tiden kontinuerlig
    function checkTime(i) {
        //setter at nul skal vises foran tall < 10
        if (i < 10) { i = "0" + i};
        return i;
    }
}

//vise ukedag 
function uke() {
    let d = new Date();
    let ukedag = new Array(7);
    ukedag[0] = "Søndag";
    ukedag[1] = "Mandag";
    ukedag[2] = "Tirsdag";
    ukedag[3] = "Onsdag";
    ukedag[4] = "Torsdag";
    ukedag[5] = "Fredag";
    ukedag[6] = "Lørdag";
    let u = ukedag[d.getDay()];
    document.getElementById("udag").innerHTML = u;
}

//function for og endre skriftfargen med mouseOver og mouseOut. Først henter vi elementene og legger til function

document.getElementById("rødtekst").onmouseover = function() {mouseOver()};
document.getElementById("rødtekst").onmouseout = function() {mouseOut()};

//her leger vi functionene
function mouseOver() {
    document.getElementById("rødtekst").style.color = "red";
}

//function for og endre farge nor musepekeren forlater tekst området
function mouseOut() {
    document.getElementById("rødtekst").style.color = "#7fff00";
}

//Lage en function som skal endre små bokstaver til store bokstaver

function storeBokstaver() {
    var n = document.getElementById("navn");
    n.value = n.value.toUpperCase();
    //utvider coden til å skrive på siden
    var n = document.getElementById("navn").value;
    document.getElementById("skrivUtPåSiden").innerHTML = n;
}
/*var mtekst = document.getElementById("rødtekst");
p.mouseover = function() {
this.style.color = 'red';
}
rødtekst.onmouseout = this.style.color = '#7fff00';*/

