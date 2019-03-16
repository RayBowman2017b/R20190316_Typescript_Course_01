var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function conslog(P_mssg) { console.log(P_mssg); }
function conslogo(P_mssg) { console.log(P_mssg); }
function conslog_an(P_mssg) { console.log(P_mssg); }
//====================================================================
conslog("L 57 sec 5 ");
var Person = /** @class */ (function () {
    function Person(P_name, username) {
        this.username = username;
        this.age = 33;
        this.name = P_name;
    }
    Person.prototype.printAge = function () {
        console.log("age is " + this.age);
    };
    Person.prototype.setType = function (P_type) {
        this.type = P_type;
        console.log("type is " + this.type);
    };
    return Person;
}());
var GC_person = new Person("Fred", "userFred");
console.log(GC_person);
GC_person.printAge();
GC_person.setType("Cool Guy");
//====================================================================
conslog("L 59 sec 5 ");
var John = /** @class */ (function (_super) {
    __extends(John, _super);
    //  name = "John";
    function John(P_username) {
        var _this = _super.call(this, "John", P_username) || this;
        _this.age = 31;
        return _this;
    }
    return John;
}(Person));
//const GC_john = new John ("Anna", "userAnna");
var GC_john = new John("userJohn");
conslogo(GC_john);
//====================================================================
var Plant = /** @class */ (function () {
    function Plant() {
        this.v_species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this.v_species;
        },
        set: function (P_value) {
            if (P_value.length > 3)
                this.v_species = P_value;
            else
                this.v_species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var GC_plant = new Plant();
console.log(" plant 1 " + GC_plant.species);
GC_plant.species = "AB";
console.log(" plant 2 " + GC_plant.species);
GC_plant.species = "Green plant";
console.log(" plant 3 " + GC_plant.species);
//====================================================================
conslog("L 63 sec 5 ");
conslog("Static Properties and Methods");
//  Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calc_circumferance = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.1416;
    return Helpers;
}());
console.log("2 * Helpers.PI " + (2 * Helpers.PI));
console.log("Helpers.calc_circumferance (8) " + Helpers.calc_circumferance(8));
//====================================================================
conslog("L 64 sec 5 ");
conslog("Abstract Classes");
var Project = /** @class */ (function () {
    function Project() {
        this.project_name = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var IT_project = /** @class */ (function (_super) {
    __extends(IT_project, _super);
    function IT_project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IT_project.prototype.change_name = function (P_new_name) {
        this.project_name = P_new_name;
    };
    return IT_project;
}(Project));
var GC_project = new IT_project();
conslog("obj 1 " + GC_project);
conslogo(GC_project);
GC_project.change_name("Super IT project");
conslog("obj 1 change " + GC_project);
conslogo(GC_project);
//====================================================================
conslog("L 65 sec 5 ");
conslog("Private Constructors & Singletons");
conslog("L 66 sec 5 ");
conslog("ReadOnly properties");
var only_one = /** @class */ (function () {
    function only_one(name) {
        this.name = name;
    }
    //static get_instance (P_name: string = "The only one") : only_one {
    only_one.get_instance = function (P_name) {
        if (!only_one.VS_instance)
            //only_one.VS_instance = new only_one("The only one");
            only_one.VS_instance = new only_one(P_name);
        return only_one.VS_instance;
    };
    return only_one;
}());
var only = only_one.get_instance("the only one");
conslogo(only);
//   returns "the only one" --- not "A Singleton"
var only2 = only_one.get_instance("A Singleton");
conslogo(only2);
//  BAD --- cannot do this, and should not do this
//  only2.name = "no no no";
//====================================================================
conslog("L 68 sec 5 ");
conslog("Exercise 1");
// Exercise 1
/*
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
*/
var Car = /** @class */ (function () {
    function Car(V_make) {
        this.V_make = V_make;
        this.V_acceleration = 0;
    }
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () { return this.V_acceleration; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "make", {
        get: function () { return this.V_make; },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () { console.log("HONK"); };
    Car.prototype.accelerate = function (P_speed_delta) {
        this.V_acceleration += P_speed_delta;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log("car.make " + car.make);
console.log("car.acceleration " + car.acceleration);
car.accelerate(20);
console.log("car.acceleration " + car.acceleration);
conslog("Exercise 2");
// Exercise 2
/*
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
*/
var cls_shape = /** @class */ (function () {
    function cls_shape(P_width, P_length) {
        this.width = 0;
        this.length = 0;
        this.width = P_width;
        this.length = P_length;
    }
    return cls_shape;
}());
var cls_rectangle = /** @class */ (function (_super) {
    __extends(cls_rectangle, _super);
    function cls_rectangle(P_width, P_length) {
        return _super.call(this, P_width, P_length) || this;
    }
    cls_rectangle.prototype.calcSize = function () { return this.width * this.length; };
    return cls_rectangle;
}(cls_shape));
var rectangle = new cls_rectangle(11, 3);
console.log(rectangle.calcSize());
conslog("Exercise 3");
// Exercise 3
/*
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
*/
var Person_02 = /** @class */ (function () {
    function Person_02() {
        this.V_firstName = "(none)";
    }
    Object.defineProperty(Person_02.prototype, "firstName", {
        get: function () {
            return this.V_firstName;
        },
        set: function (P_val) {
            /*        if (P_val.length > 3)
                        this.V_firstName = P_val;
                    else
                        this.V_firstName = "(too short)";
            */
            this.V_firstName = (P_val.length > 3) ?
                P_val : "(too short)";
        },
        enumerable: true,
        configurable: true
    });
    return Person_02;
}());
var GC_person_02 = new Person_02();
console.log(GC_person_02.firstName);
GC_person_02.firstName = "Ma";
console.log(GC_person_02.firstName);
GC_person_02.firstName = "Maximilian";
console.log(GC_person_02.firstName);
//====================================================================
conslog("===================================");
conslog("sec 5 ");
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//# sourceMappingURL=app.js.map