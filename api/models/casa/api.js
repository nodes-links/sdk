"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const models_casa_sdk_1 = require("@nodes-links/models-casa-sdk");
const headers_1 = require("../../../utils/headers");
const http = require("https");
const fs = require("fs");
const path = require("path");
/**
 * @export
 * @class CasaApi
 */
class CasaApi {
    constructor(credentialsManager) {
        /**
         * Get a Delay Propagation File
         *
         * @param {string} projectRef
         * @param {string} versionRef
         * @param {string} fileName
         * @param {string} outputDir
         */
        this.getFile = (versionRef, fileName, outputDir) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const { data } = yield this.casaClient.versionsVersionRefResultsResultFileGet({
                    versionRef,
                    resultFile: fileName
                }, undefined, headers_1.getAuthorizationHeaders(token));
                yield new Promise(res => {
                    const get = () => {
                        http.get(data.url, response => {
                            if (response.statusCode === 404) {
                                console.log(`${fileName} for versionRef ${versionRef} not available yet!`);
                                setTimeout(get, 3000);
                            }
                            else {
                                const file = fs.createWriteStream(path.join(outputDir, `${fileName}.csv`));
                                response.pipe(file);
                                file.on('finish', () => {
                                    file.close();
                                    res();
                                });
                            }
                        });
                    };
                    get();
                });
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.credentialsManager = credentialsManager;
        this.casaClient = models_casa_sdk_1.apigClientFactory.newClient();
    }
}
exports.CasaApi = CasaApi;
//# sourceMappingURL=api.js.map