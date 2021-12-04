class Animal {
    animalType: string;
    name: string;
    sound: string;
    foodType: string;
    foodRation: number;
    foodAmount: number;

    constructor(a: string, n: string, s: string, t: string, r: number, f: number) {
        this.animalType = a;
        this.name = n;
        this.sound = s;
        this.foodType = t;
        this.foodRation = r;
        this.foodAmount = f;
    }

    food() {
        return `${this.foodType} : ${this.foodAmount} Kg `;
    }

    format() {
        return `<br>The ${this.animalType} named ${this.name} sings "${this.sound}", and eats ${this.foodRation} Kg of ${this.foodType}.<br>`;
    }
}
window.addEventListener("load", handleLoad);
let animal1 = new Animal("Dog", "Hadis", "wuff", "Meat", 5, 50);
let animal2 = new Animal("Cat", "Apollon", "miau", "Tuna", 2, 20);
let animal3 = new Animal("Cow", "Hera", "muh", "Gras", 10, 200);
let animal4 = new Animal("Pig", "Ares", "oing", "Junk", 15, 230);
let animal5 = new Animal("Sheep", "Kratos", "meh", "Hay", 5, 100);

let foodDisplay: HTMLDivElement;
let animalDisplay: HTMLDivElement;
let restartDay: HTMLButtonElement;


function handleLoad(_event: Event): void {
    foodDisplay = <HTMLDivElement>document.getElementById("food");
    animalDisplay = <HTMLDivElement>document.getElementById("animals");
    restartDay = <HTMLButtonElement>document.getElementById("restart")
    foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    restartDay.addEventListener("click", dog);
    setTimeout(dog, 1000);

    function dog(): void {
        restartDay.style.display = "none";
        animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
        animalDisplay.innerHTML = animal1.format();
        updateFood();
        setTimeout(cat, 1000); 
    }
    function cat(): void {
        animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
        animalDisplay.innerHTML += animal2.format();
        updateFood();
        setTimeout(cow, 1000);
    }
    function cow(): void {
        animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
        animalDisplay.innerHTML += animal3.format();
        updateFood();
        setTimeout(pig, 1000);
    }
    function pig(): void {
        animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
        animalDisplay.innerHTML += animal4.format();
        updateFood();
        setTimeout(sheep, 1000);
    }
    function sheep(): void {
        animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
        animalDisplay.innerHTML += animal5.format();
        restartDay.style.display = "inline";
        updateFood();
    }
    function updateFood(): void{
        foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    }
}
