import { Sharp } from 'sharp';
import encode from '@oyflores/oxipng';
import { ImageminOptions, LoaderOptions } from '../options';
import { ImageOptions } from '../parseQuery';
import { compress } from './imagemin';

/**
 * Optimize a png image using @oyflores/oxipng
 *
 * @async
 * @param {Sharp} image Sharp wrapped input image
 * @param {ImageOptions} imageOptions Image options
 * @param {LoaderOptions['oxipng']} [options] Oxipng options
 * @returns {Buffer} Optimized image
 */
const optimizePng = async (
  image: Sharp,
  imageOptions: ImageOptions,
  options?: LoaderOptions['oxipng'],
  imageminOptions?: ImageminOptions,
): Promise<Buffer> => {
  // try imagemin first
  const imageminBuffer = await compress(image, imageminOptions);
  if (imageminBuffer) return imageminBuffer;

  // encode the image using @oyflores/oxipng
  return encode(await image.toBuffer(), options);
};

export default optimizePng;
