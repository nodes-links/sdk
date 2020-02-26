/**
 * Uploads zip to S3
 *
 * @param {string} url
 * @param {{ [key: string]: string }} fields
 * @param {*} stream
 * @returns
 */
export declare const uploadToS3: (url: string, fields: {
    [key: string]: string;
}, stream: any) => Promise<string>;
