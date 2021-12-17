
window.addEventListener("load", handleLoad);
let animal1: Dog = new Dog("Dog", "Hadis", "wuff", "Meat", 5, 50);
let animal2: Cat = new Cat("Cat", "Apollon", "miau", "Tuna", 2, 40);
let animal3: Cow = new Cow("Cow", "Hera", "muh", "Gras", 10, 200);
let animal4: Pig = new Pig("Pig", "Ares", "oing", "Junk", 15, 230);
let animal5: Sheep = new Sheep("Sheep", "Kratos", "meh", "Hay", 5, 100);

let foodDisplay: HTMLDivElement;
let animalDisplay: HTMLDivElement;
let restartDay: HTMLButtonElement;

function handleLoad(_event: Event): void {
    foodDisplay = <HTMLDivElement>document.getElementById("food");
    animalDisplay = <HTMLDivElement>document.getElementById("animals");
    restartDay = <HTMLButtonElement>document.getElementById("restart")
    foodDisplay.innerHTML = animal1.eat() + animal2.eat() + animal3.eat() + animal4.eat() + animal5.eat();
    restartDay.addEventListener("click", handleLoad);
    setTimeout(dog, 1000);
    setTimeout(cat, 2000);
    setTimeout(cow, 3000);
    setTimeout(pig, 4000);
    setTimeout(sheep, 5000);
}
function dog(): void {
    restartDay.style.display = "none";
    animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
    animalDisplay.innerHTML = animal1.sing() + animal1.doSpecialAction();
    updateFood();

}
function cat(): void {
    animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
    animalDisplay.innerHTML += animal2.sing() + animal2.doSpecialAction();
    updateFood();

}
function cow(): void {
    animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
    animalDisplay.innerHTML += animal3.sing() + animal3.doSpecialAction();
    updateFood();

}
function pig(): void {
    animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
    animalDisplay.innerHTML += animal4.sing() + animal4.doSpecialAction();
    updateFood();

}
function sheep(): void {
    animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
    animalDisplay.innerHTML += animal5.sing() + animal5.doSpecialAction();
    restartDay.style.display = "inline";
    updateFood();
}
function updateFood(): void {
    foodDisplay.innerHTML = animal1.eat() + animal2.eat() + animal3.eat() + animal4.eat() + animal5.eat();
}