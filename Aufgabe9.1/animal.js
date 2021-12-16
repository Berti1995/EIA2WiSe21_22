var Animal = /** @class */ (function () {
    function Animal(a, n, s, t, r, f) {
        this.animalType = a;
        this.name = n;
        this.sound = s;
        this.foodType = t;
        this.foodRation = r;
        this.foodAmount = f;
    }
    Animal.prototype.eat = function () {
        return this.foodType + " : " + this.foodAmount + " Kg ";
    };
    Animal.prototype.sing = function () {
        return "<br>The " + this.animalType + " named " + this.name + " sings \"" + this.sound + "\", and eats " + this.foodRation + " Kg of " + this.foodType + ".<br>";
    };
    return Animal;
}());
//# sourceMappingURL=animal.js.map