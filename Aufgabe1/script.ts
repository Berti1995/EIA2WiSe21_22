const subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
const verb: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];


for (let i: number = 6; i >= 1; i--) {
console.log(i);

}

function getVerse(_subject: string[], _verb: string[], _object: string[]): string {
    let vers: string = "";

    let randomS: number = Math.floor(Math.random() * _subject.length); 
    let splicedS: string = _subject.splice(randomS, 1)[0];  
    vers = vers + " " + splicedS; 

    let randomV: number = Math.floor(Math.random() * _verb.length);
    let splicedV: string = _verb.splice(randomV, 1)[0];
    vers = vers + " " + splicedV;

    let randomO: number = Math.floor(Math.random() * _object.length);
    let splicedO: string = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;

    return vers;
}