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
    var i = 0;
    while (i < 2) {
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(65, 45 + i * 40);
        ctx.lineTo(135, 5 + i * 40);
        ctx.lineTo(205, 45 + i * 40);
        ctx.lineTo(275, 5 + i * 40);
        ctx.lineTo(345, 45 + i * 40);
        ctx.lineTo(415, 5 + i * 40);
        ctx.stroke();
        i++;
    }
}
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

document.getElementById("skadimi").innerHTML = ofertaL.produkti + " sale expires " + ofertaL.data;
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
function Products(id, type, color, price, description) {
    this.id = id;
    this.type = type;
    this.color = color;
    this.price = price;
    this.description = description;
}

var p1 = new Products(1, "Powder", "white", 40, "Grinch Pressed Powder Palette");
var p2 = new Products(2, "Shadow", "red", 39, "4 Piece Shadow Stick Set");
var p3 = new Products(3, "Lip Kit", "red", 24, "Grinch Matte Lip Kit");
var p4 = new Products(4, "Highlighter", "rose", 29, "Littlest of Whos Kylighter");

document.getElementById("resize").children[1].innerHTML = p1.id + "." + p1.description + " - $" + p1.price;
document.getElementById("resize").children[2].innerHTML = p2.id + "." + p2.description + " - $" + p2.price;
document.getElementById("resize").children[3].innerHTML = p3.id + "." + p3.description + " - $" + p3.price;
document.getElementById("resize").children[4].innerHTML = p4.id + "." + p4.description + " - $" + p4.price;
document.getElementById("resize").children[5].innerHTML += p1.price + p2.price + p3.price + p4.price;


document.getElementById("maxPrice").innerHTML += p1.id.toString() + " " + p1.type.toUpperCase() + ": " + Math.max(p1.price, p2.price, p3.price, p4.price) + '$  (to exponential ' + p1.price.toExponential() + ")";

document.getElementById("maxValue").innerHTML = "Maximum number value: " + Number.MAX_VALUE;

//validon numrin qe jep shfrytezuesi
function valido() {
    var input = document.getElementById("funkMatematikore").value;
    try {
        if (isNaN(input)) throw "Not a Number";
        else if (input < 1) throw "Min value is 1";
        else if (input > 100) throw "Max value is 100";
    }
    catch (err) {
        window.alert(err);
        return false;
    }
    document.getElementById("1").innerHTML = Math.sqrt(input);
    document.getElementById("2").innerHTML = Math.PI;
    document.getElementById("3").innerHTML = Math.sin(input);
    document.getElementById("4").innerHTML = Math.cos(input);


}
//web workers
var worker = new Worker("worker.js");
worker.onmessage = function (event) {
    document.getElementById("text").innerText = event.data;
}
document.getElementById("submit").onclick = function () {
    document.getElementById("submit").style.opacity = 0.5;
    document.getElementById("submit").disabled = true;
    var num = Math.random() * (10000 - 1000) + 1000;
    console.warn("Number: " + num);
    worker.postMessage(num);

}