window.addEventListener("load", handleLoad);
var animal1 = new Dog("Dog", "Hadis", "wuff", "Meat", 5, 50);
var animal2 = new Cat("Cat", "Apollon", "miau", "Tuna", 2, 20);
var animal3 = new Cow("Cow", "Hera", "muh", "Gras", 10, 200);
var animal4 = new Pig("Pig", "Ares", "oing", "Junk", 15, 230);
var animal5 = new Sheep("Sheep", "Kratos", "meh", "Hay", 5, 100);
var foodDisplay;
var animalDisplay;
var restartDay;
function handleLoad(_event) {
    foodDisplay = document.getElementById("food");
    animalDisplay = document.getElementById("animals");
    restartDay = document.getElementById("restart");
    foodDisplay.innerHTML = animal1.eat() + animal2.eat() + animal3.eat() + animal4.eat() + animal5.eat();
    restartDay.addEventListener("click", handleLoad);
    setTimeout(dog, 1000);
    setTimeout(cat, 2000);
    setTimeout(cow, 3000);
    setTimeout(pig, 4000);
    setTimeout(sheep, 5000);
}
function dog() {
    restartDay.style.display = "none";
    animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
    animalDisplay.innerHTML = animal1.sing() + animal1.doSpecialAction();
    updateFood();
}
function cat() {
    animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
    animalDisplay.innerHTML += animal2.sing() + animal2.doSpecialAction();
    updateFood();
}
function cow() {
    animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
    animalDisplay.innerHTML += animal3.sing() + animal3.doSpecialAction();
    updateFood();
}
function pig() {
    animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
    animalDisplay.innerHTML += animal4.sing() + animal4.doSpecialAction();
    updateFood();
}
function sheep() {
    animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
    animalDisplay.innerHTML += animal5.sing() + animal5.doSpecialAction();
    restartDay.style.display = "inline";
    updateFood();
}
function updateFood() {
    foodDisplay.innerHTML = animal1.eat() + animal2.eat() + animal3.eat() + animal4.eat() + animal5.eat();
}
//# sourceMappingURL=main.js.map