namespace Canvas {
  let crc2: CanvasRenderingContext2D;
  window.addEventListener("load", handLoad);

  function handLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    console.log(canvas);

    crc2 = canvas.getContext("2d")!;
    console.log(crc2);



    for (let i: number = 0; i < 100; i++) {
      let x: number = Math.random() * 700;
      let y: number = Math.random() * 300;
      let n: number = Math.random() * 50;
      drawTriangle(x, y, n);
      drawQuadrat(x, y);
      drawCircle(x, y, n);
    }


  }

  function drawTriangle(_x: number, _y: number, _n: number): void {
    let rC: number = Math.random() * 100;
    let rC2: number = Math.random() * 360;
    let rC3: number = Math.random() * 75;
    let rC4: number = Math.random() * 360;
    let n: number = Math.random() * 100;
    crc2.beginPath();
    crc2.moveTo(_x +20 , _y + 50);
    crc2.lineTo(_x, _y + n);
    crc2.lineTo(_x + n , _y + n);
    crc2.closePath();

    crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
    crc2.strokeStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + "%)";
    crc2.fill();
  }


  function drawQuadrat(_x: number, _y: number): void {
    let rC3: number = Math.random() * 75;
    let rC4: number = Math.random() * 360;
    let rC: number = Math.random() * 100;
    let rC2: number = Math.random() * 360;
    
    crc2.beginPath();
    crc2.fillRect(_x, _y, Math.random() * 100, Math.random() * 100);

    crc2.fillStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + 25 + "%)";
    crc2.strokeStyle = "blue";
    crc2.lineWidth = 5;
    crc2.stroke();
    crc2.strokeStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
    crc2.fill();
  }

  function drawCircle(_x: number, _y: number, _n: number): void {
    let rC: number = Math.random() * 100;
    let rC2: number = Math.random() * 360;
    let rC3: number = Math.random() * 75;
    let rC4: number = Math.random() * 360;
    crc2.beginPath();
    crc2.arc(_x, _y, _n , 0, 2 * Math.PI, false);
    crc2.fillStyle = "hsl(" + rC2 + "," + rC + "%," + rC + "%)";
    crc2.fill()
    crc2.strokeStyle = "hsl(" + rC4 + "," + rC3 + "%," + rC3 + "%)";
    crc2.stroke();
  }


}