/// <reference types="node" />
import { Sharp } from 'sharp';
import { ImageminOptions, LoaderOptions } from '../options';
import { ImageOptions } from '../parseQuery';
/**
 * Optimize a jpeg image using @wasm-codecs/mozjpeg
 *
 * @async
 * @param {Sharp} image Sharp wrapped input image
 * @param {ImageOptions} imageOptions Image options
 * @param {LoaderOptions['mozjpeg']} [options] Mozjpeg options
 * @returns {Buffer} Optimized image
 */
declare const optimizeJpeg: (image: Sharp, imageOptions: ImageOptions, options?: LoaderOptions['mozjpeg'], imageminOptions?: ImageminOptions | undefined) => Promise<Buffer>;
export default optimizeJpeg;
