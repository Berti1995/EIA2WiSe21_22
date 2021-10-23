var subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
for (var i = 6; i >= 1; i--) {
    console.log(i);
}
function getVerse(_subject, _verb, _object) {
    var vers = "";
    var randomS = Math.floor(Math.random() * _subject.length);
    var splicedS = _subject.splice(randomS, 1)[0];
    vers = vers + " " + splicedS;
    var randomV = Math.floor(Math.random() * _verb.length);
    var splicedV = _verb.splice(randomV, 1)[0];
    vers = vers + " " + splicedV;
    var randomO = Math.floor(Math.random() * _object.length);
    var splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=script.js.map