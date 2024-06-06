//henter elementer
let ya = document.getElementById('ya');
let no = document.getElementById('no');
let del1 = document.getElementById('del1');

//tildele handler til hvert element

ya.onclick = skrivUtVerdi;
no.onclick = skrivUtVerdi;

//handler som henter innerHTML for den knappen som setter igang onclick eventet.
function skrivUtVerdi(){
    del1.innerHTML +=(this.innerHTML) + "<br />";
}

document.getElementById("tekst").innerHTML = 'hei jeg heter Trym og skal bli nerd';
document.getElementById("navn").innerHTML += ' Trym';


function knapp() {
    alert('JA,det funker')
}
function funker() {
    alert('JODA, dette funker også')
}

function check3(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let beregn = (weight/(height * height)* 10000);
    bmi2.innerHTML += ("Din bmi er " + beregn.toFixed(2).toString().replace(".",",") + "<br>");
}