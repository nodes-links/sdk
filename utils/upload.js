"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormData = require("form-data");
const axios = require('axios');
/**
 * Get Headers
 *
 * @param {*} form
 * @returns
 */
const getHeaders = form => {
    return new Promise((res, rej) => {
        form.getLength((err, length) => {
            if (err) {
                rej(err);
            }
            else {
                const headers = Object.assign({ 'Content-Length': length, 'Content-Type': 'multipart/form-data' }, form.getHeaders());
                res(headers);
            }
        });
    });
};
/**
 * Uploads zip to S3
 *
 * @param {string} url
 * @param {{ [key: string]: string }} fields
 * @param {*} stream
 * @returns
 */
exports.uploadToS3 = (url, fields, stream) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const form = new FormData();
    form.append('acl', 'public-read');
    // tslint:disable-next-line: forin
    for (const field in fields) {
        form.append(field, fields[field]);
    }
    form.append('file', stream, 'blob');
    const headers = yield getHeaders(form);
    yield axios({
        method: 'post',
        url,
        data: form,
        headers
    });
    return 'done!';
});
//# sourceMappingURL=upload.js.map