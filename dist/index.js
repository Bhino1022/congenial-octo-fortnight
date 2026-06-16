"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./utils/math");
const format_1 = require("./utils/format");
const main = () => {
    console.log((0, math_1.greet)('World'));
    console.log((0, format_1.formatOutput)((0, math_1.add)(5, 3)));
};
main();
//# sourceMappingURL=index.js.map