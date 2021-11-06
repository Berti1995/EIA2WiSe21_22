let eingabe: string = prompt("Enter your Word", "Here");



//let bla: string = eingabe;

let array1: any = eingabe.split("");


console.log(array1);
//debugger;
for (let index: number = 0; index < eingabe.length; index++) {

    let zufallsZahl: number = Math.floor(Math.random() * (array1.length)); 
    const cards: HTMLDivElement = document.createElement("div");
    cards.classList.add("Card" + index);
    document.body.appendChild(cards);
    cards.innerHTML = array1[zufallsZahl];
    //console.log(array1[zufallsZahl]);
    array1.splice(zufallsZahl, 1);
    //console.log(array1);
    //setTimeout(cards.style.display = "none", 3000);
}

//function hideCards(): void{
   // cards.style.display = "none";
    //console.log(cards);

    if(myArray2.lenght = myArry3.lenght){
        if(myArray2 = myArray3){
        alert