//  circle.ts
define("Math/circle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { PI, GF_calculateCircumference } from "./Math/circle"
    // namespace NS_math {
    //    export namespace NS_circle {
    //const PI = 3.14;
    exports.PI = 3.14;
    function calculateCircumference(diameter) {
        return exports.PI * diameter;
    }
    exports.GF_calculateCircumference = function (diameter) { return exports.PI * diameter; };
    exports.GF_sayhi = function () {
        console.log("HI from Circle");
        return "Circle said HI";
    };
});
//    }
// }
//  Rectangle.ts
define("Math/Rectangle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // namespace NS_math {
    exports.GF_calculateRectangle = function (width, length) { return width * length; };
    exports.GF_sayhi = function () {
        console.log("HI from Rectangle");
        return "Rectangle said HI";
    };
});
// }
//  These are not really needed if the tsconfig.json has them listed
//  in the "include" array.
//// <reference path="xxxa08_circle_math.ts" />
//// <reference path="xxxa08_rectangle_math.ts" />
//    "include": [ "app.ts", "a08_circle_math.ts", "a08_rectangle_math.ts" ],
define("app", ["require", "exports", "Math/circle", "Math/Rectangle"], function (require, exports, MP_circle, MP_rectangle) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function conslog(P_mssg) { console.log(P_mssg); }
    function conslogo(P_mssg) { console.log(P_mssg); }
    function conslog_n(P_mssg) { console.log(P_mssg); }
    function conslog_an(P_mssg) { console.log(P_mssg); }
    var GC_div_01 = document.getElementById("div_01");
    //if (GC_div_01)  GC_div_01.innerHTML = "<div>section 6</div>";
    //else alert ("NULL");
    //====================================================================
    conslog("L 71 sec 6 ");
    conslog("Namespaces");
    conslog("L 73 sec 6 ");
    conslog("Namespace Imports");
    conslog("L 74 sec 6 ");
    conslog("More on Namespaces");
    var NS_CircleMath = NS_math.NS_circle;
    conslog("GF_calculateRectangle " + NS_math.GF_calculateRectangle(10, 20));
    //conslog ("GF_calculateCircumference " + NS_math.NS_circle.GF_calculateCircumference(3));
    conslog("GF_calculateCircumference " + NS_CircleMath.GF_calculateCircumference(3));
    //====================================================================
    conslog("L 76 sec 6 ");
    conslog("Modules");
    conslog("GF_calculateCircumference " + NS_CircleMath.GF_calculateCircumference(40));
    //conslog ("PI " + PI);
    ////   not work :> conslog ("PI " + NS_CircleMath.PI);
    //conslog ("GF_calculateCircumference " + GF_calculateCircumference (20));
    // conslog ("L 79 sec 6 ");
    conslog("PI " + MP_circle.PI);
    conslog("GF_calculateCircumference " + MP_circle.GF_calculateCircumference(20));
    //====================================================================
    //conslog ("test " + NS_CircleMath.GF_sayhi ());
    //conslog ("test " + GF_circle_sayhi ());
    conslog("test " + MP_circle.GF_sayhi());
    //conslog ("test " + GF_rectangle_sayhi ());
    conslog("test " + MP_rectangle.GF_sayhi());
    conslog("===================================");
    conslog("sec 6 ");
    conslog("===================================");
});
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//  a08_Circle_math.ts
var NS_math;
(function (NS_math) {
    var NS_circle;
    (function (NS_circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return PI * diameter;
        }
        NS_circle.GF_calculateCircumference = function (diameter) { return PI * diameter; };
    })(NS_circle = NS_math.NS_circle || (NS_math.NS_circle = {}));
})(NS_math || (NS_math = {}));
//  a08_rectangle_math.ts
var NS_math;
(function (NS_math) {
    NS_math.GF_calculateRectangle = function (width, length) { return width * length; };
})(NS_math || (NS_math = {}));
//# sourceMappingURL=app.js.map