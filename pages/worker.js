//web workers
onmessage = function (event) {
    var num = event.data;
    var sqr = num * num;
    var result = "";
    for (var i = 1; i <= sqr; i++) {
        result = "Sqaure result is:" + " " + i;
    }
    postMessage(result);
}