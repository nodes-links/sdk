"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const features_projects_sdk_1 = require("@nodes-links/features-projects-sdk");
const headers_1 = require("../../../utils/headers");
/**
 * @export
 * @class ProjectsApi
 */
class ProjectsApi {
    constructor(credentialsManager) {
        /**
         * List all projects
         *
         * @returns {object} projects data
         */
        this.list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const projectsResponse = yield this.projectsClient.rootGet({}, {}, headers_1.getAuthorizationHeaders(token));
                return projectsResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Creates new project
         *
         * @param {string} name
         * @param {string} description
         * @returns {string} project reference
         */
        this.create = (name, description) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const projectsResponse = yield this.projectsClient.rootPost({}, { name, description }, headers_1.getAuthorizationHeaders(token));
                return projectsResponse.data.data.ref;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Updates a project
         *
         * @param {string} projectRef
         * @param {string} name
         * @param {string} description
         * @returns {string} project reference
         */
        this.update = (projectRef, name, description) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const projectsResponse = yield this.projectsClient.projectRefPut({ projectRef }, { name, description }, headers_1.getAuthorizationHeaders(token));
                return projectsResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Archives a project
         *
         * @param {string} projectRef
         * @returns {object} project data
         */
        this.archive = (projectRef) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const projectsResponse = yield this.projectsClient.projectRefArchivePost({ projectRef }, undefined, headers_1.getAuthorizationHeaders(token));
                return projectsResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Creates a new project version for the project specified
         *
         * @param {string} projectRef
         * @param {string} description
         * @returns {string} project version reference
         */
        this.createVersion = (projectRef, description) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const versionsResponse = yield this.projectsClient.projectRefVersionsPost({ projectRef }, { description }, headers_1.getAuthorizationHeaders(token));
                return versionsResponse.data.data.ref;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Archives a project version
         *
         * @param {string} projectRef
         * @param {string} versionRef
         * @returns {object} project data
         */
        this.archiveVersion = (projectRef, versionRef) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const versionsResponse = yield this.projectsClient.projectRefVersionsVersionRefArchivePost({ projectRef, versionRef }, undefined, headers_1.getAuthorizationHeaders(token));
                return versionsResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Updates a project version
         *
         * @param {string} projectRef
         * @param {string} versionRef
         * @param {string} description
         * @returns {object} project data
         */
        this.updateVersion = (projectRef, versionRef, description) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const versionsResponse = yield this.projectsClient.projectRefVersionsVersionRefPut({ projectRef, versionRef }, { description }, headers_1.getAuthorizationHeaders(token));
                return versionsResponse.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.credentialsManager = credentialsManager;
        this.projectsClient = features_projects_sdk_1.apigClientFactory.newClient();
    }
}
exports.ProjectsApi = ProjectsApi;
// ARCHIVE ALL PROJECTS
// projectsClient
//   .rootGet({}, undefined, additionalParameters)
//   .then(({ data }) => {
//     return Promise.all(
//       data.map(proj =>
//         projectsClient.projectRefArchivePost({ projectRef: proj.project_ref }, undefined, additionalParameters)
//       )
//     );
//   })
//   .then(console.log)
//   .catch(console.error);
//# sourceMappingURL=api.js.map