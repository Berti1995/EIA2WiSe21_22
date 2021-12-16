class Dog extends Animal {
    constructor(a: string, n: string, s: string, t: string, r: number, f: number){
        super(a, n, s, t, r, f);
    }

    doSpecialAction(): string {
        return "Special action: Protects the Farm";
    }
  }