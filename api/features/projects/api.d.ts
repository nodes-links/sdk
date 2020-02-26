/**
 * @export
 * @class ProjectsApi
 */
export declare class ProjectsApi {
    credentialsManager: any;
    projectsClient: any;
    constructor(credentialsManager: any);
    /**
     * List all projects
     *
     * @returns {object} projects data
     */
    list: () => Promise<any>;
    /**
     * Creates new project
     *
     * @param {string} name
     * @param {string} description
     * @returns {string} project reference
     */
    create: (name: string, description: string) => Promise<any>;
    /**
     * Updates a project
     *
     * @param {string} projectRef
     * @param {string} name
     * @param {string} description
     * @returns {string} project reference
     */
    update: (projectRef: string, name: string, description: string) => Promise<any>;
    /**
     * Archives a project
     *
     * @param {string} projectRef
     * @returns {object} project data
     */
    archive: (projectRef: string) => Promise<any>;
    /**
     * Creates a new project version for the project specified
     *
     * @param {string} projectRef
     * @param {string} description
     * @returns {string} project version reference
     */
    createVersion: (projectRef: string, description: string) => Promise<any>;
    /**
     * Archives a project version
     *
     * @param {string} projectRef
     * @param {string} versionRef
     * @returns {object} project data
     */
    archiveVersion: (projectRef: string, versionRef: string) => Promise<any>;
    /**
     * Updates a project version
     *
     * @param {string} projectRef
     * @param {string} versionRef
     * @param {string} description
     * @returns {object} project data
     */
    updateVersion: (projectRef: string, versionRef: string, description: string) => Promise<any>;
}
