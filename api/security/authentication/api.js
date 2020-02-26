"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const security_authn_sdk_1 = require("@nodes-links/security-authn-sdk");
const headers_1 = require("../../../utils/headers");
class AuthenticationApi {
    constructor(credentialsManager) {
        /**
         * Sign Up
         *
         * @param {string} firstname
         * @param {string} surname
         * @param {string} email
         * @param {string} password
         * @returns
         */
        this.signUp = (firstname, surname, email, password) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const signUpResponse = yield this.authApiClient.signUpPost({}, { firstname, surname, email, password }, {});
            return signUpResponse.data;
        });
        /**
         * Sign In
         *
         * @param {string} email
         * @param {string} password
         * @returns
         */
        this.signIn = (email, password) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const signInResponse = yield this.authApiClient.signInPost({}, { email, password }, {});
            return signInResponse;
        });
        /**
         * Confirm Sign Up
         *
         * @param {string} email
         * @param {string} code
         * @returns
         */
        this.confirmSignUp = (email, code) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirmSignUpResponse = yield this.authApiClient.confirmSignUpPost({}, { email, code }, {});
            return confirmSignUpResponse;
        });
        /**
         * Resend Confirmation Code
         *
         * @param {string} email
         * @returns
         */
        this.resendConfirmationCode = (email) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const resendConfirmationCodeResponse = yield this.authApiClient.resendConfirmationCodePost({}, { email }, {});
            return resendConfirmationCodeResponse;
        });
        /**
         * Forgot Password
         *
         * @param {string} email
         * @returns
         */
        this.forgotPassword = (email) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const forgotPasswordResponse = yield this.authApiClient.forgotPasswordPost({}, { email }, {});
            return forgotPasswordResponse;
        });
        /**
         * Confirm Forgot Password
         *
         * @param {string} email
         * @returns
         */
        this.confirmForgotPassword = (email, code, newPassword) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirmForgotPasswordResponse = yield this.authApiClient.confirmForgotPasswordPost({}, { email, code, newPassword }, {});
            return confirmForgotPasswordResponse;
        });
        /**
         * Change Password
         *
         * @param {string} previousPassword
         * @param {string} proposedPassword
         * @returns
         */
        this.changePassword = (previousPassword, proposedPassword) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const changePasswordResponse = yield this.authApiClient.changePasswordPost({}, { previousPassword, proposedPassword }, headers_1.getAuthorizationHeaders(token));
                return changePasswordResponse;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        /**
         * Create Access Key for programmatic access
         *
         * @returns
         */
        this.createAccessKey = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.credentialsManager.getAccessToken();
                const createAccessKeyResponse = yield this.authApiClient.accessKeysPost({}, {}, headers_1.getAuthorizationHeaders(token));
                return createAccessKeyResponse;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.credentialsManager = credentialsManager;
        this.authApiClient = security_authn_sdk_1.apigClientFactory.newClient();
    }
}
exports.AuthenticationApi = AuthenticationApi;
//# sourceMappingURL=api.js.map