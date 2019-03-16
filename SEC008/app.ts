
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

conslog ("GENERICS");

function echo (data: any) { return data; }

conslog ("L 94 sec 008 ");
conslog ("Creating a Generic Function");
function GF_genericEcho<T> (data: T): T {
    return data;
}

console.log (GF_genericEcho<string>("Astring").length);

conslog ("L 95 sec 008 ");
conslog ("Built-in Generic Types: Arrays");

const GC_testResults: Array<number> = [ 1.94, 2.33];
GC_testResults.push(90.44);
console.log (GC_testResults);

//====================================================================
conslog ("L 96 sec 008 ");
conslog ("Generic Types and Arrays");

function GF_printAll<T>(args: T[])  {
    args.forEach ( (element) => console.log(element));
}

GF_printAll<string> (["Apple", "Banana"]);

//====================================================================
conslog ("L 97 sec 008 ");
conslog ("Using Generic Types");

const GF_echo2: <T> (data: T) => T = GF_genericEcho;

console.log (GF_echo2<string>("something"));


//====================================================================
conslog ("L 98 sec 008 ");
conslog ("Creating a Generic Class");
conslog ("L 99 sec 008 ");
conslog ("Constraints");

class cls_simpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate () {
        return +this.baseValue * +this.multiplyValue;
    }
}

const GC_simpleMath = new cls_simpleMath<number> ();
GC_simpleMath.baseValue = 10;
//GC_simpleMath.baseValue = "something";
GC_simpleMath.multiplyValue = 20;
console.log ("GC_simpleMath_02.calculate() 1 > ");
console.log (GC_simpleMath.calculate());

const GC_simpleMath_02 = new cls_simpleMath<string> ();
GC_simpleMath_02.baseValue = "10";
GC_simpleMath_02.multiplyValue = "20";
console.log ("GC_simpleMath_02.calculate() 2 > ");
console.log (GC_simpleMath_02.calculate());

/*
const GC_simpleMath_error = new cls_simpleMath<boolean> ();
GC_simpleMath_error.baseValue = true;
GC_simpleMath_error.multiplyValue = false;
console.log ("GC_simpleMath_error.calculate() ERROR > ");
console.log (GC_simpleMath_error.calculate());
*/

//====================================================================
conslog ("L 100 sec 008 ");
conslog ("Using more that one generic type");

interface ntf_numstr {}

class cls_simpleMath_03<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate () {
        return +this.baseValue * +this.multiplyValue;
    }
}

const GC_simpleMath_03 = new cls_simpleMath_03<string, number> ();
GC_simpleMath_03.baseValue = "10";
GC_simpleMath_03.multiplyValue = 20;
console.log ("GC_simpleMath_03.calculate() 3 > ");
console.log (GC_simpleMath_03.calculate());

//====================================================================

/*
setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
*/

class cls_keyMap<T extends number | string> {

    private V_mapStore : any = [];

    public setItem (P_key: string, P_item: T) : void {
        const L_map : {key: string, Value: T } = {
            key : P_key,
            Value : P_item
        };
        this.V_mapStore[P_key] = L_map;
    }
    public getItem = (P_key: string): any => this.V_mapStore[P_key];
    public clear = (): any => this.V_mapStore = [];
    public printMap (): void {
        // console.log (this.V_mapStore.length);
        // console.log (this.V_mapStore);
        // console.log (Array.isArray(this.V_mapStore));
        //this.V_mapStore.forEach ( (item: any) => console.log (JSON.stringify(item)));
        Object.keys(this.V_mapStore).forEach(function(key, index) {
             console.log(this[key], index);
        }, this.V_mapStore);
    }
}

class cls_maxKeyMap<T> {
    private map : { [key: string] : T } = {};
    public setItem(P_key: string, P_value: T): void {
        this.map[P_key] = P_value;
    }
    public getItem(P_key: string): T {
        return this.map[P_key];
    }
    public clear (): void {this.map = {}};
    public printMap (): void {
        for (let L_key in this.map) console.log(L_key, this.map[L_key]);
    };
}

//const numberMap = new cls_keyMap<number>();
const numberMap = new cls_maxKeyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log ("numberMap.getItem('apples') > ",
              numberMap.getItem('apples'));
numberMap.printMap();
 
//const stringMap = new cls_keyMap<string>();
const stringMap = new cls_maxKeyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log ("stringMap.getItem('age') > ",
              stringMap.getItem('age'));
stringMap.printMap();

//====================================================================
//====================================================================
conslog ("===================================");
conslog ("sec 008 ");
conslog ("===================================");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
