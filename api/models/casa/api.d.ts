/**
 * @export
 * @class CasaApi
 */
export declare class CasaApi {
    credentialsManager: any;
    casaClient: any;
    constructor(credentialsManager: any);
    /**
     * Get a Delay Propagation File
     *
     * @param {string} projectRef
     * @param {string} versionRef
     * @param {string} fileName
     * @param {string} outputDir
     */
    getFile: (versionRef: string, fileName: string, outputDir: string) => Promise<void>;
}
