"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios = require('axios');
const CryptoJS = require('crypto-js');
const constants_1 = require("./constants");
/**
 * @class CredentialsManager
 * @classdesc The Credentials Manager SDK class.
 *
 * @param {Object} options
 * @param {string} [options.accessToken] - An access token for making authenticated requests.
 * @param {string} [options.clientId] - The client id for your account.
 * @param {string} [options.clientSecret] - The client secret for your account.
 */
class CredentialsManager {
    /**
     * Creates an instance of CredentialsManager.
     *
     * @param {*} options
     * @memberof CredentialsManager
     */
    constructor(options) {
        options = options || {};
        this.accessToken = options.accessToken;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
    }
    /**
     * Set the access token used to authenticate requests to the API.
     *
     * @param {String} accessToken - An access token
     */
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * Get the access token
     *
     * @returns {string} Access token
     */
    getAccessToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.accessToken && typeof this.accessToken === 'string') {
                return this.accessToken;
            }
            else {
                if (this.clientId &&
                    typeof this.clientId === 'string' &&
                    this.clientSecret &&
                    typeof this.clientSecret === 'string') {
                    return yield this.generateAccessToken()
                        .then(r => {
                        return r;
                    })
                        .catch((error) => {
                        throw new Error(error);
                    });
                }
                else {
                    throw new Error('Client credentials or an accessToken is required to initialize the NodesLinks client');
                }
            }
        });
    }
    /**
     * Set the client id, which is used to help gain an access token.
     *
     * @param {string} clientId - Your account client id
     * @returns {undefined}
     */
    setClientId(clientId) {
        this.clientId = clientId;
    }
    /**
     * Get the client id
     *
     * @returns {string} Client id
     */
    getClientId() {
        if (!this.clientId || typeof this.clientId !== 'string' || this.clientId.length === 0) {
            throw new Error('A client Id is required to initialize the NodesLinks client');
        }
        else {
            return this.clientId;
        }
    }
    /**
     * Set the client secret
     *
     * @param {string} clientSecret - Your account client secret
     */
    setClientSecret(clientSecret) {
        this.clientSecret = clientSecret;
    }
    /**
     * Get the client secret
     *
     * @returns {string} Client secret
     */
    getClientSecret() {
        if (!this.clientSecret || typeof this.clientSecret !== 'string' || this.clientSecret.length === 0) {
            throw new Error('A client Secret is required to initialize the NodesLinks client');
        }
        else {
            return this.clientSecret;
        }
    }
    /**
     * Generates an access token from client id and client secret
     *
     * @returns access token
     */
    generateAccessToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const clientId = this.getClientId();
            const clientSecret = this.getClientSecret();
            // Encode credentials with base64
            const wordArray = CryptoJS.enc.Utf8.parse(`${clientId}:${clientSecret}`);
            const base64 = CryptoJS.enc.Base64.stringify(wordArray);
            const access_token = yield axios({
                method: 'POST',
                url: `${constants_1.constants.OAUTH_BASE_URL}/token`,
                data: 'grant_type=client_credentials&scope=api/admin',
                headers: {
                    Authorization: `Basic ${base64}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then((response) => {
                return response.data.access_token;
            })
                .catch((error) => {
                throw new Error(error);
            });
            this.setAccessToken(access_token);
            return this.accessToken;
        });
    }
}
exports.CredentialsManager = CredentialsManager;
//# sourceMappingURL=credentials-manager.js.map