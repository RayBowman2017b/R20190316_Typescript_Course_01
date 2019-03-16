//  play02.js
var source = [1, 3, 4, 9];
var cls_solution_pairs = /** @class */ (function () {
    function cls_solution_pairs(P_first_ndx, P_second_ndx) {
        this.U_first_ndx = P_first_ndx;
        this.U_second_ndx = P_second_ndx;
    }
    Object.defineProperty(cls_solution_pairs.prototype, "G_string_items", {
        get: function () { return JSON.stringify(this); },
        enumerable: true,
        configurable: true
    });
    ;
    return cls_solution_pairs;
}());
var cls_numbers_sum = /** @class */ (function () {
    function cls_numbers_sum() {
        var _this = this;
        this.V_solution_pairs = [];
        this.V_compliments = [];
        this.V_has_value = function (ndx) { return typeof _this.V_compliments[ndx] !== 'undefined'; };
    }
    cls_numbers_sum.prototype.take_solution_set2 = function (P_compliment_ndx, P_ndx, P_src_value) {
        console.log("P_compliment_ndx : " + P_compliment_ndx + ", P_ndx : " + P_ndx + ", P_src_value : " + P_src_value);
        this.V_solution_pairs.push(new cls_solution_pairs(P_compliment_ndx, P_ndx));
    };
    cls_numbers_sum.prototype.UF_give_results = function () {
        this.V_solution_pairs.forEach(function (P_item, ndx) { return console.log(" (" + ndx + ") - " + P_item.G_string_items); });
    };
    //    P_sum - P_source_item
    cls_numbers_sum.prototype.UF_sum_pair2 = function (P_source, P_sum) {
        var ndx = 1, L_compliment = 0;
        this.V_compliments = [];
        this.V_compliments[P_sum - P_source[0]] = 0;
        //console.log (" =========== L_complement, ndx ", L_compliment, ndx, this.V_compliments);
        while (ndx < P_source.length) {
            if (this.V_has_value(P_source[ndx]))
                this.take_solution_set2(this.V_compliments[P_source[ndx]], ndx, P_source[ndx]);
            this.V_compliments[P_sum - P_source[ndx]] = ndx++;
            //console.log (" =========== L_complement, ndx ", L_compliment, ndx, this.V_compliments);
        }
    };
    //  start at each end, then move to the middle
    cls_numbers_sum.prototype.take_solution_set = function (lower, upper) {
        console.log("lower, upper " + lower, upper);
    };
    cls_numbers_sum.prototype.UF_sum_pair = function (P_source, P_sum) {
        var lower = 0, upper = P_source.length - 1;
        while (lower < upper) {
            if ((P_source[lower] + P_source[upper]) == 8) {
                this.take_solution_set(lower, upper);
                lower++;
            }
            else if ((P_source[lower] + P_source[upper]) < 8)
                lower++;
            else if ((P_source[lower] + P_source[upper]) > 8)
                upper--;
        }
    };
    return cls_numbers_sum;
}());
var GC_numbers_sum = new cls_numbers_sum();
console.log("source " + source);
GC_numbers_sum.UF_sum_pair2(source, 8);
source = [1, 3, 4, 4];
source = [1, 3, 4, 4, 7, 5];
source = [1, 3, 4, 4, 7];
console.log("source " + source);
GC_numbers_sum.UF_sum_pair2(source, 8);
GC_numbers_sum.UF_give_results();
//# sourceMappingURL=play02.js.map