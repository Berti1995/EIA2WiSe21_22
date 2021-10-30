var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", handleLoad);
    var span;
    var div0;
    var div1;
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0 = document.getElementById("div0");
        div1 = document.getElementById("div1");
    }
    function setInfoBox(_event) {
        span = document.getElementById("span");
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X:" + x + "px <br> Y:" + y + "px <br>" + target;
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=main.js.map