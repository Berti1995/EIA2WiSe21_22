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
   format(){
        return `The ${this.animalType} named ${this.name} sings ${this.sound}, and eats ${this.foodRation} Kg of ${this.foodType}. ${this.foodAmount} Kg of ${this.foodType} are left.`; 
    }
}
window.addEventListener("load", handleLoad);
const  animal1 = new Animal("Dog", "Hadis", "wuff", "Meat", 5, 50);
const  animal2 = new Animal("Cat", "Apollon", "miau", "Tuna", 2, 20);
const  animal3 = new Animal("Cow", "Hera", "muh", "Gras", 10, 200);
const  animal4 = new Animal("Pig", "Ares", "oing", "Junk", 15, 230);
const  animal5 = new Animal("sheep", "Hermes", "meh", "Hay", 5, 100);

function handleLoad(): void{
    dog();
}

function dog(): void{
    animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
    document.body.innerHTML = animal1.format(); 
    cat();  
}

function cat(): void{
    animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
    document.body.innerHTML = animal2.format();  
    cow(); 
}
function cow(): void{
    animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
    document.body.innerHTML = animal3.format(); 
    pig();  
}
function pig(): void{
    animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
    document.body.innerHTML = animal4.format();  
    sheep(); 
}
function sheep(): void{
    animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
    document.body.innerHTML = animal5.format();   
}

