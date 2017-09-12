console.log("Test");

function witaj(imie){

    document.write("POLAKI" +" " + imie);
}

function PoleProstokata(a,b){ 
    return a*b;
}

var _a = prompt("A: ");
var _b = prompt("B: ");


console.log(PoleProstokata(_a, _b));

var name = "daniel";
witaj(name);
