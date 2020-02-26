/**
 * @class CredentialsManager
 * @classdesc The Credentials Manager SDK class.
 *
 * @param {Object} options
 * @param {string} [options.accessToken] - An access token for making authenticated requests.
 * @param {string} [options.clientId] - The client id for your account.
 * @param {string} [options.clientSecret] - The client secret for your account.
 */
export declare class CredentialsManager {
    clientId: string;
    clientSecret: string;
    accessToken: string;
    /**
     * Creates an instance of CredentialsManager.
     *
     * @param {*} options
     * @memberof CredentialsManager
     */
    constructor(options: any);
    /**
     * Set the access token used to authenticate requests to the API.
     *
     * @param {String} accessToken - An access token
     */
    setAccessToken(accessToken: string): void;
    /**
     * Get the access token
     *
     * @returns {string} Access token
     */
    getAccessToken(): Promise<string>;
    /**
     * Set the client id, which is used to help gain an access token.
     *
     * @param {string} clientId - Your account client id
     * @returns {undefined}
     */
    setClientId(clientId: string): void;
    /**
     * Get the client id
     *
     * @returns {string} Client id
     */
    getClientId(): string;
    /**
     * Set the client secret
     *
     * @param {string} clientSecret - Your account client secret
     */
    setClientSecret(clientSecret: string): void;
    /**
     * Get the client secret
     *
     * @returns {string} Client secret
     */
    getClientSecret(): string;
    /**
     * Generates an access token from client id and client secret
     *
     * @returns access token
     */
    generateAccessToken(): Promise<string>;
}
