"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs");
const path = require("path");
const JSZip = require('jszip');
/**
 * Zip files
 *
 * @param {string} inDir
 *
 * @returns
 */
exports.zipFiles = (inDir) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const files = fs.readdirSync(inDir);
    const zip = new JSZip();
    files.forEach(filename => {
        const indexOfUnderscore = filename.indexOf('_');
        const indexOfDot = indexOfUnderscore > -1 ? indexOfUnderscore : filename.indexOf('.');
        const newFileName = `${filename.substring(0, indexOfDot)}.csv`;
        const content = fs.readFileSync(path.join(inDir, filename));
        zip.file(newFileName, content);
    });
    const zipContent = yield new Promise(res => {
        zip.generateAsync({ type: 'nodebuffer' }).then((content) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            res(content);
        }));
    });
    return zipContent;
});
//# sourceMappingURL=zip.js.map