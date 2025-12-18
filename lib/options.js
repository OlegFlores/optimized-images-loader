"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFurtherLoaderOptions = void 0;
// default options for file- & url-loader
const defaultFurtherLoaderOptions = exports.defaultFurtherLoaderOptions = {
  name: '[name]-[contenthash].[ext]',
  limit: 8192
};