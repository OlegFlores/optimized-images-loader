"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _svgo = _interopRequireDefault(require("svgo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Optimize a svg image using svgo
 *
 * @async
 * @param {Buffer} image Input image
 * @param {ImageOptions} imageOptions Image options
 * @param {LoaderOptions['svgo']} [options] Svgo options
 * @returns {Buffer} Optimized image
 */
const optimizeSvg = async (image, imageOptions, options) => {
  // optimize the image using svgo
  const svgo = new _svgo.default(options);
  const {
    data
  } = await svgo.optimize(image.toString());
  return Buffer.from(data);
};
var _default = exports.default = optimizeSvg;