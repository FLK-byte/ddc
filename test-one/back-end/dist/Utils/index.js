"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringWithoutQuotes = void 0;
const stringWithoutQuotes = (el) => el.replace(/["']/g, '');
exports.stringWithoutQuotes = stringWithoutQuotes;
