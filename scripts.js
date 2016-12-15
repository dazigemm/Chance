function Bayes() {
	var toPrint = "";
	var f = document.getElementById("bayes");
	var ba = f.elements[0].value;
	var a = f.elements[1].value;
	var b = f.elements[2].value;
	toPrint += ba*a/b;
	//document.write("Halp");
	document.getElementById("bayesAns").innerHTML = toPrint;
}


function Cond() {
	var toPrint = "";
	var f = document.getElementById("cond");
	var ab = f.element[0].value;
	var b = f.element[1].value;
	toPrint += ab*b;
	document.getElementById("condAns").innerHTML = toPrint;
}

function IncEx () {
	var toPrint = "";
	var f = document.getElementById("IncEx");
	var a = f.element[0].value;
	var b = f.element[1].value;
	var ab = f.lement[2].value;
	toPrint += a + b - ab;
	document.getElementById("IncExAns").innerHTML = toPrint;
}

function totalP () {
	var toPrint = "";
	//collect data from form
	//perhaps ask how many 1st? Or ask to be entered w/ comma in between?
	document.getElementById("totalPAns").innerHTML = toPrint;
}
