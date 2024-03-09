/*
Minecraft Pixel Art Maker
© gd-codes 2024
https://gd-codes.github.io/mc-pixelart-maker/
*/


/**
 * Saves the given form data to local storage.
 * If the original image exceeds a certain size threshold, the resizedImage is saved in place of the originalImage.
 * @param {string} uid - The form uid. Used as key to retrieve the form data later.
 * @param {string} originalFileName - The file name.
 * @param {string} originalImage - The data URL representing the original image.
 * @param {string} resizedImage - The data URL representing the image resized to the map area.
 * @param {boolean} originalWasResized - Whether the original image was already resized to a previous map area.
 * @param {string} fnName - The function name.
 * @param {Object} configuration - The form configuration. An arbitrary JSON-able object.
 * @returns {boolean} - Whether saving the form data was successful.
 */
function saveFormData(uid, {
  PictureDataForUid: {
    originalFileName,
    originalImage,
    resizedImage,
    originalWasResized
  },
  fnName,
  configuration
}) {

  // We prefer to store the original, but if it exceeds the threshold and the resized is smaller than the original,
  // we store the resized instead.
  // In that case, we store the resized even if it exceeds the threshold.
  let originalTooLarge = 1000000 < originalImage.length &&
      resizedImage.length < originalImage.length;

  let formDataString = JSON.stringify({
    fnName: fnName,
    originalFileName: originalFileName,
    image: originalTooLarge ? resizedImage : originalImage,
    originalWasResized: originalWasResized || originalTooLarge,
    configuration: configuration
  });

  try {
    // add or overwrite data for uid
    localStorage.setItem("formData_" + uid, formDataString);
  } catch (e) {
    // assume quota exceeded
    deleteSavedFormData(uid);
    return false;
  }

  // add uid to the list of known uids
  let uids = getStoredFormDataUids();
  if (uids.indexOf(uid) < 0) {
    uids.push(uid);
    try {
      localStorage.setItem("uids", JSON.stringify(uids));
    } catch (e) {
      // assume quota exceeded
      deleteSavedFormData(uid);
      return false;
    }
  }

  return true;
}

/**
 * Loads the previously saved form data from local storage.
 * @param {string} uid - The uid of the form to load.
 * @returns {{fnName: string, configuration: *, PictureDataForUid: {originalFileName: string, originalWasResized: boolean, originalImage: (string)}}|null} - the stored form data, or null
 */
function getSavedFormData(uid) {
  let data = JSON.parse(localStorage.getItem("formData_" + uid) || "null");
  if (!data) {
    return null;
  }
  return {
    fnName: data.fnName,
    PictureDataForUid: {
      originalImage: data.image,
      originalFileName: data.originalFileName,
      originalWasResized: data.originalWasResized
    },
    configuration: data.configuration
  }
}

/**
 * Returns the size of the form data stored for the given form uid.
 * @param {string} uid - The form uid.
 * @returns {number}
 */
function getSavedFormDataSize(uid) {
  return (localStorage.getItem("formData_" + uid) || "").length;
}

/**
 * Returns whether the form data saved for the uid contains a resized image.
 * @param {string} uid - The form uid.
 * @returns {boolean}
 */
function getSavedFormOriginalWasResized(uid) {
  let data = JSON.parse(localStorage.getItem("formData_" + uid) || "null");
  if (!data) {
    return false;
  }
  return !!data.originalWasResized;
}

/**
 * Deletes form data from local storage.
 * @param {string} uid - The uid of the form to delete from local storage.
 */
function deleteSavedFormData(uid) {
  let uids = getStoredFormDataUids().filter(function (v) {
    return v !== uid;
  });
  localStorage.setItem("uids", JSON.stringify(uids));
  localStorage.removeItem("formData_" + uid);
}

/**
 * Returns the uids of all forms for which data is stored in local storage.
 * @returns {Array<string>}
 */
function getStoredFormDataUids() {
  return JSON.parse(localStorage.getItem("uids") || "[]");
}
