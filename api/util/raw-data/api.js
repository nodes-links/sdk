"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const papa = require("papaparse");
const _ = tslib_1.__importStar(require("lodash"));
const fs = require("fs");
const operators_1 = require("rxjs/operators");
const util_raw_data_sdk_1 = require("@nodes-links/util-raw-data-sdk");
const headers_1 = require("../../../utils/headers");
const upload_1 = require("../../../utils/upload");
const zip_1 = require("../../../utils/zip");
const util_raw_data_common_1 = require("@nodes-links/util-raw-data-common");
class RawDataApi {
    constructor(credentialsManager, projectsApi, primaveraEvents, rawDataService) {
        this.projectsApi = projectsApi;
        this.primaveraEvents = primaveraEvents;
        this.rawDataService = rawDataService;
        /**
         * Get a signed Url
         *
         * @param {string} versionRef
         *
         * @returns
         */
        this.getPrimaveraTables = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const configPrimaveraTablesResponse = yield this.rawDataClient.configPrimaveraTablesGet({}, {}, headers_1.getAuthorizationHeaders(token));
                return configPrimaveraTablesResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Get a signed Url
         *
         * @param {string} versionRef
         *
         * @returns
         */
        this.getSignedUrl = (versionRef) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const signedUrlResponse = yield this.rawDataClient.versionsVersionRefSignedUrlGet({ versionRef }, {}, headers_1.getAuthorizationHeaders(token));
                return signedUrlResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Start Models
         *
         * @param {string} projectRef
         * @param {string} versionRef
         *
         * @returns
         */
        this.startModels = (projectRef, versionRef) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                yield this.rawDataClient.versionsVersionRefPost({ versionRef }, { projectRef }, headers_1.getAuthorizationHeaders(token));
                return 'done';
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Upload Raw data
         *
         * @param {*} projectRef
         * @param {*} versionRef
         * @param {string} inDir
         */
        this.uploadRawData = (projectRef, versionRef, inDir) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { url, fields } = yield this.getSignedUrl(versionRef);
                const zipContent = yield zip_1.zipFiles(inDir);
                yield upload_1.uploadToS3(url, fields, zipContent);
                yield this.startModels(projectRef, versionRef);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Uploads .xer File,  Creates new version and start models
         *
         * @param {string} filePath
         * @memberof RawDataApi
         */
        this.uploadXer = (filePath, projectRef, versionDescription) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const NOT_XER_ERROR = `Unable to process selected file, please select a .xer file`;
            try {
                if (fs.existsSync(filePath)) {
                    if (!_.endsWith(filePath.toLowerCase(), '.xer')) {
                        throw new Error(NOT_XER_ERROR);
                    }
                    const file = fs.createReadStream(filePath);
                    this.papa.parse(file, {
                        worker: true,
                        complete: (results) => {
                            // console.log(results);
                            this.primaveraEvents.parsingResultsStarted.next(results);
                        },
                        // Set to true to automatically detect numbers and booleans from the raw data and use the corresponding JS type instead of a string
                        dynamicTyping: true
                    });
                    this.tableConfigService.tables = new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        try {
                            if (this.tableConfigService._tables)
                                resolve(this.tableConfigService._tables);
                            this.tableConfigService._tables = yield this.getPrimaveraTables();
                            resolve(this.tableConfigService._tables);
                        }
                        catch (error) {
                            reject(error);
                        }
                    }));
                }
                else {
                    throw new Error('File not found!');
                }
                // 1. Parsing Data Completed
                yield this.primaveraEvents.parsingResultsCompleted.pipe(operators_1.first()).toPromise();
                // 2. Create new project version
                const versionRef = yield this.projectsApi.createVersion(projectRef, versionDescription);
                // 2. Get signedUrl
                const { url, fields } = yield this.getSignedUrl(versionRef);
                // 3. Zip
                const zipContent = yield this.zipService.generateZip(false, false, 'nodebuffer');
                // 4. Upload
                yield upload_1.uploadToS3(url, fields, zipContent);
                // 5. Start Models
                yield this.startModels(projectRef, versionRef);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.credentialsManager = credentialsManager;
        this.rawDataClient = util_raw_data_sdk_1.apigClientFactory.newClient();
        this.papa = papa;
        this.tableConfigService = new util_raw_data_common_1.TableConfigCommonService();
        this.zipService = new util_raw_data_common_1.ZipCommonService(this.rawDataService, this.tableConfigService);
    }
}
exports.RawDataApi = RawDataApi;
//# sourceMappingURL=api.js.map