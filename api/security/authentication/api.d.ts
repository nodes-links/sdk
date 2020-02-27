export declare class AuthenticationApi {
    credentialsManager: any;
    authApiClient: any;
    constructor(credentialsManager: any);
    /**
     * Sign Up
     *
     * @param {string} firstname
     * @param {string} surname
     * @param {string} email
     * @param {string} password
     * @returns
     */
    signUp: (firstname: string, surname: string, email: string, password: string) => Promise<any>;
    /**
     * Sign In
     *
     * @param {string} email
     * @param {string} password
     * @returns
     */
    signIn: (email: string, password: string) => Promise<any>;
    /**
     * Confirm Sign Up
     *
     * @param {string} email
     * @param {string} code
     * @returns
     */
    confirmSignUp: (email: string, code: string) => Promise<any>;
    /**
     * Resend Confirmation Code
     *
     * @param {string} email
     * @returns
     */
    resendConfirmationCode: (email: string) => Promise<any>;
    /**
     * Forgot Password
     *
     * @param {string} email
     * @returns
     */
    forgotPassword: (email: string) => Promise<any>;
    /**
     * Confirm Forgot Password
     *
     * @param {string} email
     * @returns
     */
    confirmForgotPassword: (email: string, code: string, newPassword: string) => Promise<any>;
    /**
     * Change Password
     *
     * @param {string} previousPassword
     * @param {string} proposedPassword
     * @returns
     */
    changePassword: (previousPassword: string, proposedPassword: string) => Promise<any>;
    /**
     * Create Access Key for programmatic access
     *
     * @returns
     */
    createAccessKey: () => Promise<any>;
    /**
     * Get Access Key for this account
     * @returns
     */
    getAccessKeys: () => Promise<any>;
    /**
     * Deletes Access Key
     *
     * @param {string} id
     * @returns
     */
    deleteAccessKey: (id: string) => Promise<any>;
}
