var Animal = /** @class */ (function () {
    function Animal(a, n, s, t, r, f) {
        this.animalType = a;
        this.name = n;
        this.sound = s;
        this.foodType = t;
        this.foodRation = r;
        this.foodAmount = f;
    }
    Animal.prototype.food = function () {
        return this.foodType + " : " + this.foodAmount + " Kg ";
    };
    Animal.prototype.format = function () {
        return "<br>The " + this.animalType + " named " + this.name + " sings \"" + this.sound + "\", and eats " + this.foodRation + " Kg of " + this.foodType + ".<br>";
    };
    return Animal;
}());
window.addEventListener("load", handleLoad);
var animal1 = new Animal("Dog", "Hadis", "wuff", "Meat", 5, 50);
var animal2 = new Animal("Cat", "Apollon", "miau", "Tuna", 2, 20);
var animal3 = new Animal("Cow", "Hera", "muh", "Gras", 10, 200);
var animal4 = new Animal("Pig", "Ares", "oing", "Junk", 15, 230);
var animal5 = new Animal("Sheep", "Kratos", "meh", "Hay", 5, 100);
var foodDisplay;
var animalDisplay;
var restartDay;
function handleLoad(_event) {
    foodDisplay = document.getElementById("food");
    animalDisplay = document.getElementById("animals");
    restartDay = document.getElementById("restart");
    foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    restartDay.addEventListener("click", dog);
    setTimeout(dog, 1000);
    function dog() {
        restartDay.style.display = "none";
        animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
        animalDisplay.innerHTML = animal1.format();
        updateFood();
        setTimeout(cat, 1000);
    }
    function cat() {
        animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
        animalDisplay.innerHTML += animal2.format();
        updateFood();
        setTimeout(cow, 1000);
    }
    function cow() {
        animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
        animalDisplay.innerHTML += animal3.format();
        updateFood();
        setTimeout(pig, 1000);
    }
    function pig() {
        animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
        animalDisplay.innerHTML += animal4.format();
        updateFood();
        setTimeout(sheep, 1000);
    }
    function sheep() {
        animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
        animalDisplay.innerHTML += animal5.format();
        restartDay.style.display = "inline";
        updateFood();
    }
    function updateFood() {
        foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    }
}
//# sourceMappingURL=main.js.map