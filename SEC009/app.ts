
function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_n (P_mssg: number): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }


// const GC_div_01 = document.getElementById ("div_id01");
// if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 007</div>";
//else alert ("NULL");

//====================================================================

conslog ("DECORATORS");

conslog ("L 105 sec 009 ");
conslog ("Creating a Class Decorator");

// TypeScript gives a reference to the constructor function

function logged (constructorFn: Function) {
    console.log (constructorFn);
}

@logged
class cls_person {
    constructor () {
        console.log ("HI!");
    }
}

//====================================================================
conslog ("L 106 sec 009 ");
conslog ("Decorator Factories");

function logging (value: boolean): any {
    return value ? logged : null;
}

//@logging(true)
//@logging(false)
@logging(true)
class car {

}
//====================================================================
conslog ("L 107 sec 009 ");
conslog ("Creating a Useful Decorator");
conslog ("L 108 sec 009 ");
conslog ("Using Multiple Decorators");

function printable (constructorFn: Function) : any {
    constructorFn.prototype.print = function () {
        console.log (this);
    }
}


@logging(true)
@printable
class cls_plant {
    name = "Green Plant";
}

const GC_plant = new cls_plant ();
(<any>GC_plant).print();

//====================================================================

conslog ("L 109 sec 009 ");
conslog ("https://www.typescriptlang.org/docs/handbook/decorators.html");

//====================================================================

conslog ("L 110 sec 009 ");
conslog ("Method Decorators");
conslog ("L 111 sec 009 ");
conslog ("Property Decorators");

//  descriptor : Object.defineProperty
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
//  Use "configurable" to reconfigure a property.

function editable (value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

//  PROBLEM: the constructor for the object cannot write to the property either!
function overwritable (value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable : value
        };
        return newDescriptor;
    }
}

class cls_project {

//  PROBLEM: the constructor for the object cannot write to the property either!
    //@overwritable(false)
    @overwritable(true)
    projectName: string;

    constructor (name:string) {
        this.projectName = name;
    }

    //@editable(false)
    //@editable(true)
    @editable(false)
    calcBudget () {
        console.log(1000);
    }
}

const GC_project = new cls_project ("Super Project");
GC_project.calcBudget();
GC_project.calcBudget = function () { conslog_n (2000); };
//  the function definition can be overriden
GC_project.calcBudget();


//====================================================================

conslog ("L 112 sec 009 ");
conslog ("Parameter Decorators");


function GF_printInfo (P_target: any, P_methodName: string, P_paramIndex: number) {
    console.log ("Target: ", P_target);
    console.log ("methodName: ", P_methodName);
    console.log ("P_paramIndex: ", P_paramIndex);
}

class cls_course {
    name: string;
    constructor (P_name: string) {
        this.name = P_name;
    }
    printStudentNumbers (P_mode: string, @GF_printInfo P_printAll: boolean) {
        if (P_printAll) console.log (10000);
        else console.log (2000);
    }
}

const GC_course = new cls_course ("Literature");
GC_course.printStudentNumbers("mode 1", true);
GC_course.printStudentNumbers("mode 1", false);

//====================================================================
//====================================================================
conslog ("===================================");
conslog ("sec 009 ");
conslog ("===================================");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
