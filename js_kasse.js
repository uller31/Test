var h;
var b;
var l;

function konverter(){
	h= parseFloat(document.test.h.value);
	b= parseFloat(document.test.b.value);
	l= parseFloat(document.test.l.value);
}

function overflade(){
	konverter();
	var resultat =2*b*h+2*l*b+2*l*h;
	document.test.over.value=resultat;
}

function volume(){
	konverter();
	var resultat =l*b*h;
	document.test.vol.value=resultat;
}
