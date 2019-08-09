/**
 * @type {Object}
 */
const statusClassMapper = {
    ERROR: '_err',
    OK: '_ok',
    LOCKED: '_lock',
};

/**
 * @param {string} result
 * @returns {string}
 */
export default (result) => statusClassMapper[result];
