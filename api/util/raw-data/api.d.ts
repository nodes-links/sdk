import papa = require('papaparse');
import { ProjectsApi } from '../../../api/features/projects/api';
import { TableConfigCommonService, ZipCommonService, RawDataCommonService, PrimaveraParsingCommonEvents } from '@nodes-links/util-raw-data-common';
export declare class RawDataApi {
    private projectsApi;
    private primaveraEvents;
    private rawDataService;
    credentialsManager: any;
    rawDataClient: any;
    papa: typeof papa;
    tableConfigService: TableConfigCommonService;
    zipService: ZipCommonService;
    primaveraTables: any;
    constructor(credentialsManager: any, projectsApi: ProjectsApi, primaveraEvents: PrimaveraParsingCommonEvents, rawDataService: RawDataCommonService);
    /**
     * Get a signed Url
     *
     * @param {string} versionRef
     *
     * @returns
     */
    getPrimaveraTables: () => Promise<any>;
    /**
     * Get a signed Url
     *
     * @param {string} versionRef
     *
     * @returns
     */
    getSignedUrl: (versionRef: string) => Promise<any>;
    /**
     * Start Models
     *
     * @param {string} projectRef
     * @param {string} versionRef
     *
     * @returns
     */
    startModels: (projectRef: string, versionRef: string) => Promise<string>;
    /**
     * Upload Raw data
     *
     * @param {*} projectRef
     * @param {*} versionRef
     * @param {string} inDir
     */
    uploadRawData: (projectRef: any, versionRef: any, inDir: string) => Promise<void>;
    /**
     * Uploads .xer File,  Creates new version and start models
     *
     * @param {string} filePath
     * @memberof RawDataApi
     */
    uploadXer: (filePath: string, projectRef: any, versionDescription: string) => Promise<void>;
}
