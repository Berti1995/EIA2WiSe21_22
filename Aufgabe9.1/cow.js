var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow(a, n, s, t, r, f) {
        return _super.call(this, a, n, s, t, r, f) || this;
    }
    Cow.prototype.doSpecialAction = function () {
        return "Special action: Produces milk.";
    };
    return Cow;
}(Animal));
//# sourceMappingURL=cow.js.map