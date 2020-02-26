"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_manager_1 = require("./utils/credentials-manager");
const api_1 = require("./api/security/authentication/api");
const api_2 = require("./api/models/casa/api");
const api_3 = require("./api/util/raw-data/api");
const api_4 = require("./api/features/projects/api");
const util_raw_data_common_1 = require("@nodes-links/util-raw-data-common");
/**
 * @class NodesLinks
 * @classdesc The NodesLinks SDK class that provides methods to authenticate, read, archive and
 * create projects, run models etc in a user's NodesLinks Account.
 * @arg {Object} options
 */
class NodesLinks {
    /**
     * Creates an instance of NodesLinks.
     *
     * @param {*} options
     * @memberof NodesLinks
     */
    constructor(options) {
        const credentialsManager = new credentials_manager_1.CredentialsManager(options);
        // Authentication
        this.authentication = new api_1.AuthenticationApi(credentialsManager);
        // Features
        this.projects = new api_4.ProjectsApi(credentialsManager);
        // Models
        this.models = {
            delayPropagation: new api_2.CasaApi(credentialsManager)
        };
        // Utilities
        const primaveraParsingEvents = new util_raw_data_common_1.PrimaveraParsingCommonEvents();
        const rawDataEvents = new util_raw_data_common_1.RawDataCommonEvents();
        const primaveraParsingService = new util_raw_data_common_1.PrimaveraParsingCommonService(primaveraParsingEvents, rawDataEvents);
        const rawDataService = new util_raw_data_common_1.RawDataCommonService(primaveraParsingEvents, rawDataEvents);
        this.utils = {
            rawData: new api_3.RawDataApi(credentialsManager, this.projects, primaveraParsingEvents, rawDataService)
        };
    }
}
exports.NodesLinks = NodesLinks;
//# sourceMappingURL=sdk.js.map