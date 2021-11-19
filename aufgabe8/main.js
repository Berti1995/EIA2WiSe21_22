var Canvas;
(function (Canvas) {
    var crc2;
    window.addEventListener("load", handLoad);
    function handLoad(_event) {
        var canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        for (var i = 0; i < 100; i++) {
            var x = Math.random() * 700;
            var y = Math.random() * 300;
            var n = Math.random() * 50;
            drawTriangle(x, y, n);
            drawQuadrat(x, y);
            drawCircle(x, y, n);
        }
    }
    function drawTriangle(_x, _y, _n) {
        var rC = Math.random() * 100;
        var rC2 = Math.random() * 360;
        var rC3 = Math.random() * 75;
        var rC4 = Math.random() * 360;
        var n = Math.random() * 100;
        crc2.beginPath();
        crc2.moveTo(_x + 20, _y + 50);
        crc2.lineTo(_x, _y + n);
        crc2.lineTo(_x + n, _y + n);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
        crc2.strokeStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + "%)";
        crc2.fill();
    }
    function drawQuadrat(_x, _y) {
        var rC3 = Math.random() * 75;
        var rC4 = Math.random() * 360;
        var rC = Math.random() * 100;
        var rC2 = Math.random() * 360;
        crc2.beginPath();
        crc2.fillRect(_x, _y, Math.random() * 100, Math.random() * 100);
        crc2.fillStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + 25 + "%)";
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.strokeStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
        crc2.fill();
    }
    function drawCircle(_x, _y, _n) {
        var rC = Math.random() * 100;
        var rC2 = Math.random() * 360;
        var rC3 = Math.random() * 75;
        var rC4 = Math.random() * 360;
        crc2.beginPath();
        crc2.arc(_x, _y, _n, 0, 2 * Math.PI, false);
        crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
        crc2.fill();
        crc2.strokeStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + "%)";
        crc2.stroke();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=main.js.map