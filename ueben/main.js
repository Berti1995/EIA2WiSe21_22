var eingabe = prompt("Enter your Word", "Here");
//let bla: string = eingabe;
var array1 = eingabe.split("");
console.log(array1);
//debugger;
for (var index = 0; index < eingabe.length; index++) {
    var zufallsZahl = Math.floor(Math.random() * (array1.length));
    var cards = document.createElement("div");
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
//# sourceMappingURL=main.js.map