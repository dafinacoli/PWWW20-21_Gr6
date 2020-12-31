draw('canvas1');
draw('canvas2');
//holiday sale text
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
ctx.font = "68px arial";
var gradient = ctx.createLinearGradient(0, 0, 200, 100);
gradient.addColorStop(0.5, "#c9181a");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillText("Holiday Sale", 5, 60);

//foto
var canvas = document.getElementById("photo");
var ctx = canvas.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10, 500, 300);

//vijat
function draw(element) {
    var ctx = document.getElementById(element).getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineJoin = 'miter';
    for (var i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(65, 45 + i * 40);
        ctx.lineTo(135, 5 + i * 40);
        ctx.lineTo(205, 45 + i * 40);
        ctx.lineTo(275, 5 + i * 40);
        ctx.lineTo(345, 45 + i * 40);
        ctx.lineTo(415, 5 + i * 40);
        ctx.stroke();
    }
}

//koha
var d = new Date();
document.getElementById("demo").innerHTML = d;

//konstruktori
function Skadimi(data, produkti) {
    this.data = data;
    this.produkti = produkti;
}
var d = new Date("January 1, 2021");
d.setMonth(d.getMonth() + 1);
var ofertaL = new Skadimi(d.toLocaleDateString(), "Lips");
d = new Date("December 25, 2020");
d.setMonth(d.getMonth() + 1);
var ofertaE = new Skadimi(d.toLocaleDateString(), "Eyes");
d = new Date("December 25, 2020");
d.setMonth(d.getMonth() + 2);
var ofertaF = new Skadimi(d.toLocaleDateString(), "Face");

document.getElementById("skadimiL").innerHTML = ofertaL.produkti + " sale expires " + ofertaL.data;
document.getElementById("skadimiE").innerHTML = ofertaE.produkti + " sale expires " + ofertaE.data;
document.getElementById("skadimiF").innerHTML = ofertaF.produkti + " sale expires " + ofertaF.data;
//metoda nga e cila shfaqen transformimet 2D dhe 3D
function show(element) {
    if (element == 'x') {
        document.getElementById("rotateX").style.display = "block";
        document.getElementById("rotateY").style.display = "none";
        document.getElementById("rotate").style.display = "none";
        document.getElementById("skew").style.display = "none";
        document.getElementById("rotateZ").style.display = "none";
    }
    else if (element == 'y') {
        document.getElementById("rotateY").style.display = "block";
        document.getElementById("rotateX").style.display = "none";
        document.getElementById("rotate").style.display = "none";
        document.getElementById("skew").style.display = "none";
        document.getElementById("rotateZ").style.display = "none";
    }
    else if (element == 's') {
        document.getElementById("rotateY").style.display = "none";
        document.getElementById("rotateX").style.display = "none";
        document.getElementById("rotate").style.display = "none";
        document.getElementById("skew").style.display = "block";
        document.getElementById("rotateZ").style.display = "none";
    }
    else if (element == 'r') {
        document.getElementById("rotateY").style.display = "none";
        document.getElementById("rotateX").style.display = "none";
        document.getElementById("skew").style.display = "none";
        document.getElementById("rotate").style.display = "block";
        document.getElementById("rotateZ").style.display = "none";
    }
    else {
        document.getElementById("rotateY").style.display = "none";
        document.getElementById("rotateX").style.display = "none";
        document.getElementById("skew").style.display = "none";
        document.getElementById("rotate").style.display = "none";
        document.getElementById("rotateZ").style.display = "block";
    }
}