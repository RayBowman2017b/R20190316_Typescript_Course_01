var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function conslog(P_mssg) { console.log(P_mssg); }
function conslogo(P_mssg) { console.log(P_mssg); }
function conslog_n(P_mssg) { console.log(P_mssg); }
function conslog_an(P_mssg) { console.log(P_mssg); }
// const GC_div_01 = document.getElementById ("div_id01");
// if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 007</div>";
//else alert ("NULL");
//====================================================================
conslog("DECORATORS");
conslog("L 105 sec 009 ");
conslog("Creating a Class Decorator");
// TypeScript gives a reference to the constructor function
function logged(constructorFn) {
    console.log(constructorFn);
}
var cls_person = /** @class */ (function () {
    function cls_person() {
        console.log("HI!");
    }
    cls_person = __decorate([
        logged
    ], cls_person);
    return cls_person;
}());
//====================================================================
conslog("L 106 sec 009 ");
conslog("Decorator Factories");
function logging(value) {
    return value ? logged : null;
}
//@logging(true)
//@logging(false)
var car = /** @class */ (function () {
    function car() {
    }
    car = __decorate([
        logging(true)
    ], car);
    return car;
}());
//====================================================================
conslog("L 107 sec 009 ");
conslog("Creating a Useful Decorator");
conslog("L 108 sec 009 ");
conslog("Using Multiple Decorators");
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var cls_plant = /** @class */ (function () {
    function cls_plant() {
        this.name = "Green Plant";
    }
    cls_plant = __decorate([
        logging(true),
        printable
    ], cls_plant);
    return cls_plant;
}());
var GC_plant = new cls_plant();
GC_plant.print();
//====================================================================
conslog("L 109 sec 009 ");
conslog("https://www.typescriptlang.org/docs/handbook/decorators.html");
//====================================================================
conslog("L 110 sec 009 ");
conslog("Method Decorators");
conslog("L 111 sec 009 ");
conslog("Property Decorators");
//  descriptor : Object.defineProperty
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
//  Use "configurable" to reconfigure a property.
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//  PROBLEM: the constructor for the object cannot write to the property either!
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var cls_project = /** @class */ (function () {
    function cls_project(name) {
        this.projectName = name;
    }
    //@editable(false)
    //@editable(true)
    cls_project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], cls_project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], cls_project.prototype, "calcBudget", null);
    return cls_project;
}());
var GC_project = new cls_project("Super Project");
GC_project.calcBudget();
GC_project.calcBudget = function () { conslog_n(2000); };
//  the function definition can be overriden
GC_project.calcBudget();
//====================================================================
conslog("L 112 sec 009 ");
conslog("Parameter Decorators");
function GF_printInfo(P_target, P_methodName, P_paramIndex) {
    console.log("Target: ", P_target);
    console.log("methodName: ", P_methodName);
    console.log("P_paramIndex: ", P_paramIndex);
}
var cls_course = /** @class */ (function () {
    function cls_course(P_name) {
        this.name = P_name;
    }
    cls_course.prototype.printStudentNumbers = function (P_mode, P_printAll) {
        if (P_printAll)
            console.log(10000);
        else
            console.log(2000);
    };
    __decorate([
        __param(1, GF_printInfo)
    ], cls_course.prototype, "printStudentNumbers", null);
    return cls_course;
}());
var GC_course = new cls_course("Literature");
GC_course.printStudentNumbers("mode 1", true);
GC_course.printStudentNumbers("mode 1", false);
//====================================================================
//====================================================================
conslog("===================================");
conslog("sec 009 ");
conslog("===================================");
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//# sourceMappingURL=app.js.map