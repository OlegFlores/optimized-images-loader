"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compress = compress;

var _imagemin = _interopRequireDefault(require("imagemin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function compress(image, options) {
  if (!options) return undefined;
  const plugins = [];

  if ((options === null || options === void 0 ? void 0 : options.mozjpeg) && options.mozjpeg !== false) {
    const mozjpeg = require('imagemin-mozjpeg');

    if (options.mozjpeg === true) {
      plugins.push(mozjpeg());
    } else {
      plugins.push(mozjpeg(options.mozjpeg));
    }
  }

  if ((options === null || options === void 0 ? void 0 : options.optipng) && options.optipng !== false) {
    const optipng = require('imagemin-optipng');

    if (options.optipng === true) {
      plugins.push(optipng());
    } else {
      plugins.push(optipng(options.optipng));
    }
  }

  if ((options === null || options === void 0 ? void 0 : options.pngquant) && options.pngquant !== false) {
    const pngquant = require('imagemin-pngquant');

    if (options.pngquant === true) {
      plugins.push(pngquant());
    } else {
      plugins.push(pngquant(options.pngquant));
    }
  }

  if (plugins.length === 0) return undefined;
  const buffer = await image.toBuffer();
  return _imagemin.default.buffer(buffer, {
    plugins
  });
}