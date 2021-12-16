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

    eat(): string {
        return `${this.foodType} : ${this.foodAmount} Kg `;
    }

    sing(): string {
        return `<br>The ${this.animalType} named ${this.name} sings "${this.sound}", and eats ${this.foodRation} Kg of ${this.foodType}.<br>`;
    }
}