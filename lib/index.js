"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = optimizedImagesLoader;
exports.raw = void 0;
var _loaderUtils = require("loader-utils");
var _processImage = _interopRequireDefault(require("./processImage"));
var _parseQuery = _interopRequireDefault(require("./parseQuery"));
var _processLoaders = _interopRequireDefault(require("./processLoaders"));
var _cache = require("./cache");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Optimized images loader
 * Called by webpack
 *
 * @param {Buffer} source Image to optimize
 * @returns {null} Calls the webpack callback once finished
 */
function optimizedImagesLoader(source) {
  const callback = this.async();
  (async () => {
    const loaderOptions = (0, _loaderUtils.getOptions)(this);

    // parse image options
    const imageOptions = (0, _parseQuery.default)(this.resourceQuery, loaderOptions);
    let result;

    // try retrieving the image from cache
    const cacheHash = (0, _cache.getHash)(source, imageOptions);
    const cached = await (0, _cache.getCache)(cacheHash, loaderOptions);
    if (cached) {
      result = cached;

      // update image options from cache
      if (cached.imageOptions) {
        Object.keys(cached.imageOptions).forEach(option => {
          imageOptions[option] = cached.imageOptions[option];
        });
      }
    } else {
      try {
        // process image
        result = await (0, _processImage.default)(source, imageOptions, loaderOptions);

        // cache processed image
        (0, _cache.setCache)(cacheHash, result.data, result.info, imageOptions, loaderOptions);
      } catch (err) {
        // Fix to mute errors when trying to process SVG fonts
        console.error('Could not process the image file');
        result = {
          data: source,
          info: {}
        };
      }
    }

    // process further loaders
    const output = (0, _processLoaders.default)(this, result.data, result.info, imageOptions, loaderOptions);
    callback(null, output);
  })();
  return null;
}
const raw = exports.raw = true;