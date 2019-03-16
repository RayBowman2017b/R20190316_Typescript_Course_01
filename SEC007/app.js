function conslog(P_mssg) { console.log(P_mssg); }
function conslogo(P_mssg) { console.log(P_mssg); }
function conslog_n(P_mssg) { console.log(P_mssg); }
function conslog_an(P_mssg) { console.log(P_mssg); }
// const GC_div_01 = document.getElementById ("div_id01");
// if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 007</div>";
//else alert ("NULL");
//====================================================================
conslog("L 84 sec 007 ");
conslog("Interfaces");
conslog("L 85 sec 007 ");
conslog("Interfaces and Properties");
var GC_greet = function (P_person) {
    return conslog("Hello " + P_person.firstName);
};
var GC_changeName = function (P_person, P_new_name) {
    return P_person.firstName = P_new_name;
};
var GC_person_01 = {
    firstName: "Andy",
    age: 33,
    greet: function (P_lastName) {
        conslog("Hi, I am " + this.firstName + " " + P_lastName);
    }
};
var GC_person_02 = {
    firstName: "Pete",
    hobbies: ["stamps", "cars"],
    greet: function (P_lastName) {
        conslog("Hello, I am " + this.firstName + " " + P_lastName);
    }
};
GC_greet({ firstName: "Ben", age: 41, greet: function (P_n) { } });
GC_greet({ firstName: "Tom", greet: function (P_n) { } });
GC_greet(GC_person_01);
GC_changeName(GC_person_01, "Anna");
GC_greet(GC_person_01);
GC_greet(GC_person_02);
conslog("L 86 sec 007 ");
conslog("Interfaces and methods");
GC_person_01.greet("Bates");
GC_person_02.greet("Smith");
//====================================================================
conslog("L 87 sec 007 ");
conslog("Interfaces and Classes");
var cls_person = /** @class */ (function () {
    function cls_person() {
    }
    cls_person.prototype.greet = function (P_lastName) {
        conslog("Howdy, I am " + this.firstName + " " + P_lastName);
    };
    return cls_person;
}());
var GC_person_03 = new cls_person();
GC_person_03.firstName = "Marty";
GC_greet(GC_person_03);
GC_person_03.greet("Jones");
//====================================================================
conslog("L 88 sec 007 ");
conslog("Interfaces and Function Types");
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
conslog("myDoubleFunction(2, 9) :> " + myDoubleFunction(2, 9));
//====================================================================
conslog("L 88 sec 007 ");
conslog("Interfaces and Function Types");
var GC_old_person = {
    age: 82,
    firstName: "Old Pete",
    greet: function (P_lastName) {
        conslog("hello there, i am " + this.firstName + " " + P_lastName);
    }
};
conslog("GC_old_person");
conslogo(GC_old_person);
//====================================================================
conslog("===================================");
conslog("sec 007 ");
conslog("===================================");
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