namespace Aufgabe3 {

    window.addEventListener("load", handleLoad);

    let span: HTMLSpanElement;
    let div0: HTMLDivElement;
    let div1: HTMLDivElement;

    function handleLoad(): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0 = <HTMLDivElement> document.getElementById("div0");
        div1 = <HTMLDivElement>document.getElementById("div1");
        
    }

    


    function setInfoBox(_event: MouseEvent): void {

        span = document.getElementById("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let target: EventTarget = _event.target;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "X:" + x + "px <br> Y:" + y + "px <br>" +target
    }

    function logInfo(_event: Event): void {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target)

    }
}