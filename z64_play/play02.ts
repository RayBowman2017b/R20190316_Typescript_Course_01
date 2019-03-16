
//  play02.js

let source = [ 1, 3, 4, 9 ];

class cls_solution_pairs {
    public U_first_ndx: number;
    public U_second_ndx: number;
    public get G_string_items () { return JSON.stringify (this) };
    public constructor (P_first_ndx: number, P_second_ndx: number) {
        this.U_first_ndx = P_first_ndx;
        this.U_second_ndx = P_second_ndx;
    }
}

class cls_numbers_sum {

    private V_solution_pairs: cls_solution_pairs[] = [];

    private V_compliments: number[] = [];
    private V_has_value = (ndx: number) : boolean => typeof this.V_compliments[ndx] !== 'undefined';

    private take_solution_set2 (P_compliment_ndx: number, P_ndx: number, P_src_value: number): void {
        console.log (`P_compliment_ndx : ${P_compliment_ndx}, P_ndx : ${P_ndx}, P_src_value : ${P_src_value}`);
        this.V_solution_pairs.push(new cls_solution_pairs (P_compliment_ndx, P_ndx));
    }
    public UF_give_results (): void {
        this.V_solution_pairs.forEach ( (P_item, ndx) => console.log (` (${ndx}) - ${P_item.G_string_items}`) );
    }

    //    P_sum - P_source_item
    public UF_sum_pair2  (P_source: number[], P_sum: number)  {
        let ndx = 1, L_compliment = 0;
        this.V_compliments = [];
        this.V_compliments[P_sum - P_source[0]] = 0;
        //console.log (" =========== L_complement, ndx ", L_compliment, ndx, this.V_compliments);
        while (ndx < P_source.length) {
            if (this.V_has_value(P_source[ndx]))
                this.take_solution_set2 (this.V_compliments[P_source[ndx]], ndx, P_source[ndx]);
            this.V_compliments[P_sum - P_source[ndx]] = ndx++;
        //console.log (" =========== L_complement, ndx ", L_compliment, ndx, this.V_compliments);
        }
    }

//  start at each end, then move to the middle

    private take_solution_set (lower: number, upper: number): void {
        console.log ("lower, upper " + lower, upper);
    }

public UF_sum_pair  (P_source: number[], P_sum: number)  {

    let lower: number = 0, upper: number = P_source.length - 1;

    while (lower < upper) {
        if ((P_source[lower] + P_source[upper]) == 8) {
            this.take_solution_set (lower, upper);
            lower++;
        }
        else
        if ((P_source[lower] + P_source[upper]) < 8)
            lower++;
        else
        if ((P_source[lower] + P_source[upper]) > 8)
            upper--;
    }
}

}

const GC_numbers_sum = new cls_numbers_sum ();

    console.log ("source " + source);

GC_numbers_sum.UF_sum_pair2 (source, 8);

 source = [ 1, 3, 4, 4 ];
 source = [ 1, 3, 4, 4, 7, 5 ];
 source = [ 1, 3, 4, 4, 7 ];
    console.log ("source " + source);

GC_numbers_sum.UF_sum_pair2 (source, 8);
GC_numbers_sum.UF_give_results ();
