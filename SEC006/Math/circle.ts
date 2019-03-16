
//  circle.ts

// import { PI, GF_calculateCircumference } from "./Math/circle"

// namespace NS_math {
//    export namespace NS_circle {

        //const PI = 3.14;
        export const PI = 3.14;

        function calculateCircumference (diameter: number): number {
            return PI * diameter;
        }

        export const GF_calculateCircumference = (diameter: number): number => PI * diameter;
        export const GF_sayhi = (): string => {
            console.log ("HI from Circle");
            return "Circle said HI";
        }
//    }
// }
