"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatArray = exports.formatOutput = void 0;
const formatOutput = (value) => {
    return `Result: ${value}`;
};
exports.formatOutput = formatOutput;
const formatArray = (items) => {
    return items.map((item) => String(item)).join(', ');
};
exports.formatArray = formatArray;
//# sourceMappingURL=format.js.map