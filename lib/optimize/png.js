"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _oxipng = _interopRequireDefault(require("@oyflores/oxipng"));
var _imagemin = require("./imagemin");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Optimize a png image using @oyflores/oxipng
 *
 * @async
 * @param {Sharp} image Sharp wrapped input image
 * @param {ImageOptions} imageOptions Image options
 * @param {LoaderOptions['oxipng']} [options] Oxipng options
 * @returns {Buffer} Optimized image
 */
const optimizePng = async (image, imageOptions, options, imageminOptions) => {
  // try imagemin first
  const imageminBuffer = await (0, _imagemin.compress)(image, imageminOptions);
  if (imageminBuffer) return imageminBuffer;

  // encode the image using @oyflores/oxipng
  return (0, _oxipng.default)(await image.toBuffer(), options);
};
var _default = exports.default = optimizePng;