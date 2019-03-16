
//  a08_Circle_math.ts

namespace NS_math {
    export namespace NS_circle {

        const PI = 3.14;

        function calculateCircumference (diameter: number): number {
            return PI * diameter;
        }

        export const GF_calculateCircumference = (diameter: number): number => PI * diameter;
    }
}

