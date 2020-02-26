"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizationHeaders = token => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};
//# sourceMappingURL=headers.js.map