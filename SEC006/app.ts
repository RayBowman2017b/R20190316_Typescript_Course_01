
//  These are not really needed if the tsconfig.json has them listed
//  in the "include" array.
//// <reference path="xxxa08_circle_math.ts" />
//// <reference path="xxxa08_rectangle_math.ts" />
//    "include": [ "app.ts", "a08_circle_math.ts", "a08_rectangle_math.ts" ],

// conslog ("L 76 sec 6 ");
// import { PI, GF_calculateCircumference, GF_sayhi as GF_circle_sayhi } from "./Math/circle";
//import { GF_calculateRectangle, GF_sayhi as GF_rectangle_sayhi } from "./Math/Rectangle";
// conslog ("L 79 sec 6 ");
import * as MP_circle from "./Math/circle";
import * as MP_rectangle from "./Math/Rectangle";


function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_n (P_mssg: number): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }


const GC_div_01 = document.getElementById ("div_id01");
if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 006</div>";
//else alert ("NULL");

//====================================================================

conslog ("L 71 sec 6 ");
conslog ("Namespaces");
conslog ("L 73 sec 6 ");
conslog ("Namespace Imports");
conslog ("L 74 sec 6 ");
conslog ("More on Namespaces");

import NS_CircleMath = NS_math.NS_circle;

conslog ("GF_calculateRectangle " + NS_math.GF_calculateRectangle(10, 20));
//conslog ("GF_calculateCircumference " + NS_math.NS_circle.GF_calculateCircumference(3));
conslog ("GF_calculateCircumference " + NS_CircleMath.GF_calculateCircumference(3));

//====================================================================

conslog ("L 76 sec 6 ");
conslog ("Modules");

conslog ("GF_calculateCircumference " + NS_CircleMath.GF_calculateCircumference (40));

//conslog ("PI " + PI);
////   not work :> conslog ("PI " + NS_CircleMath.PI);
//conslog ("GF_calculateCircumference " + GF_calculateCircumference (20));

// conslog ("L 79 sec 6 ");
conslog ("PI " + MP_circle.PI);
conslog ("GF_calculateCircumference " + MP_circle.GF_calculateCircumference (20));

//====================================================================

//conslog ("test " + NS_CircleMath.GF_sayhi ());
//conslog ("test " + GF_circle_sayhi ());
conslog ("test " + MP_circle.GF_sayhi ());
//conslog ("test " + GF_rectangle_sayhi ());
conslog ("test " + MP_rectangle.GF_sayhi ());
conslog ("===================================");
conslog ("sec 6 ");
conslog ("===================================");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
