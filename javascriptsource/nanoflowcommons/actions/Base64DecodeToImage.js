import Base64 from 'js-base64';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * This JS Action takes a base64 String and a System.Image, decodes the base64 String and stores the resulting image in the System.Image object
 * @param {string} base64
 * @param {MxObject} photo
 * @returns {Promise.<boolean>}
 */
function Base64DecodeToImage(base64, photo) {
    // BEGIN USER CODE
    if (!base64) {
        throw new Error("base64 String should not be empty");
    }
    if (!photo) {
        throw new Error("photo should not be null");
    }
    const blob = new Blob([Base64.toUint8Array(base64)], { type: "image/png" });
    return new Promise((resolve, reject) => {
        mx.data.saveDocument(photo.getGuid(), "camera image", {}, blob, () => resolve(true), reject);
    });
    // END USER CODE
}

export { Base64DecodeToImage };
