import imagemin from 'imagemin';
import { Sharp } from 'sharp';
import { ImageminOptions } from '../options';

export async function compress(image: Sharp, options?: ImageminOptions): Promise<Buffer | undefined> {
  if (!options) return undefined;
  const plugins = [];

  if (options?.mozjpeg && options.mozjpeg !== false) {
    const mozjpeg = (await import('imagemin-mozjpeg')).default;
    if (options.mozjpeg === true) {
      plugins.push(mozjpeg());
    } else {
      plugins.push(mozjpeg(options.mozjpeg));
    }
  }

  if (options?.optipng && options.optipng !== false) {
    const optipng = (await import('imagemin-optipng')).default;
    if (options.optipng === true) {
      plugins.push(optipng());
    } else {
      plugins.push(optipng(options.optipng));
    }
  }

  if (options?.pngquant && options.pngquant !== false) {
    const pngquant = (await import('imagemin-pngquant')).default;
    if (options.pngquant === true) {
      plugins.push(pngquant());
    } else {
      plugins.push(pngquant(options.pngquant));
    }
  }

  if (plugins.length === 0) return undefined;

  const buffer = await image.toBuffer();

  return imagemin.buffer(buffer, {
    plugins,
  });
}
