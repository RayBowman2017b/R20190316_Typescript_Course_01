function conslog(P_mssg) { console.log(P_mssg); }
function conslogo(P_mssg) { console.log(P_mssg); }
function conslog_n(P_mssg) { console.log(P_mssg); }
function conslog_an(P_mssg) { console.log(P_mssg); }
// const GC_div_01 = document.getElementById ("div_id01");
// if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 007</div>";
//else alert ("NULL");
//====================================================================
conslog("GENERICS");
function echo(data) { return data; }
conslog("L 94 sec 008 ");
conslog("Creating a Generic Function");
function GF_genericEcho(data) {
    return data;
}
console.log(GF_genericEcho("Astring").length);
conslog("L 95 sec 008 ");
conslog("Built-in Generic Types: Arrays");
var GC_testResults = [1.94, 2.33];
GC_testResults.push(90.44);
console.log(GC_testResults);
//====================================================================
conslog("L 96 sec 008 ");
conslog("Generic Types and Arrays");
function GF_printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
GF_printAll(["Apple", "Banana"]);
//====================================================================
conslog("L 97 sec 008 ");
conslog("Using Generic Types");
var GF_echo2 = GF_genericEcho;
console.log(GF_echo2("something"));
//====================================================================
conslog("L 98 sec 008 ");
conslog("Creating a Generic Class");
conslog("L 99 sec 008 ");
conslog("Constraints");
var cls_simpleMath = /** @class */ (function () {
    function cls_simpleMath() {
    }
    cls_simpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return cls_simpleMath;
}());
var GC_simpleMath = new cls_simpleMath();
GC_simpleMath.baseValue = 10;
//GC_simpleMath.baseValue = "something";
GC_simpleMath.multiplyValue = 20;
console.log("GC_simpleMath_02.calculate() 1 > ");
console.log(GC_simpleMath.calculate());
var GC_simpleMath_02 = new cls_simpleMath();
GC_simpleMath_02.baseValue = "10";
GC_simpleMath_02.multiplyValue = "20";
console.log("GC_simpleMath_02.calculate() 2 > ");
console.log(GC_simpleMath_02.calculate());
/*
const GC_simpleMath_error = new cls_simpleMath<boolean> ();
GC_simpleMath_error.baseValue = true;
GC_simpleMath_error.multiplyValue = false;
console.log ("GC_simpleMath_error.calculate() ERROR > ");
console.log (GC_simpleMath_error.calculate());
*/
//====================================================================
conslog("L 100 sec 008 ");
conslog("Using more that one generic type");
var cls_simpleMath_03 = /** @class */ (function () {
    function cls_simpleMath_03() {
    }
    cls_simpleMath_03.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return cls_simpleMath_03;
}());
var GC_simpleMath_03 = new cls_simpleMath_03();
GC_simpleMath_03.baseValue = "10";
GC_simpleMath_03.multiplyValue = 20;
console.log("GC_simpleMath_03.calculate() 3 > ");
console.log(GC_simpleMath_03.calculate());
//====================================================================
/*
setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
*/
var cls_keyMap = /** @class */ (function () {
    function cls_keyMap() {
        var _this = this;
        this.V_mapStore = [];
        this.getItem = function (P_key) { return _this.V_mapStore[P_key]; };
        this.clear = function () { return _this.V_mapStore = []; };
    }
    cls_keyMap.prototype.setItem = function (P_key, P_item) {
        var L_map = {
            key: P_key,
            Value: P_item
        };
        this.V_mapStore[P_key] = L_map;
    };
    cls_keyMap.prototype.printMap = function () {
        // console.log (this.V_mapStore.length);
        // console.log (this.V_mapStore);
        // console.log (Array.isArray(this.V_mapStore));
        //this.V_mapStore.forEach ( (item: any) => console.log (JSON.stringify(item)));
        Object.keys(this.V_mapStore).forEach(function (key, index) {
            console.log(this[key], index);
        }, this.V_mapStore);
    };
    return cls_keyMap;
}());
var cls_maxKeyMap = /** @class */ (function () {
    function cls_maxKeyMap() {
        this.map = {};
    }
    cls_maxKeyMap.prototype.setItem = function (P_key, P_value) {
        this.map[P_key] = P_value;
    };
    cls_maxKeyMap.prototype.getItem = function (P_key) {
        return this.map[P_key];
    };
    cls_maxKeyMap.prototype.clear = function () { this.map = {}; };
    ;
    cls_maxKeyMap.prototype.printMap = function () {
        for (var L_key in this.map)
            console.log(L_key, this.map[L_key]);
    };
    ;
    return cls_maxKeyMap;
}());
//const numberMap = new cls_keyMap<number>();
var numberMap = new cls_maxKeyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log("numberMap.getItem('apples') > ", numberMap.getItem('apples'));
numberMap.printMap();
//const stringMap = new cls_keyMap<string>();
var stringMap = new cls_maxKeyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log("stringMap.getItem('age') > ", stringMap.getItem('age'));
stringMap.printMap();
//====================================================================
//====================================================================
conslog("===================================");
conslog("sec 008 ");
conslog("===================================");
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//# sourceMappingURL=app.js.map