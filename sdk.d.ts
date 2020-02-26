import { AuthenticationApi } from './api/security/authentication/api';
import { CasaApi } from './api/models/casa/api';
import { RawDataApi } from './api/util/raw-data/api';
import { ProjectsApi } from './api/features/projects/api';
/**
 * @class NodesLinks
 * @classdesc The NodesLinks SDK class that provides methods to authenticate, read, archive and
 * create projects, run models etc in a user's NodesLinks Account.
 * @arg {Object} options
 */
export declare class NodesLinks {
    projects: ProjectsApi;
    authentication: AuthenticationApi;
    models: {
        delayPropagation: CasaApi;
    };
    utils: {
        rawData: RawDataApi;
    };
    /**
     * Creates an instance of NodesLinks.
     *
     * @param {*} options
     * @memberof NodesLinks
     */
    constructor(options: any);
}
