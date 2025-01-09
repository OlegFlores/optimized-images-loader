/// <reference types="node" />
import { Sharp } from 'sharp';
import { ImageminOptions } from '../options';
export declare function compress(image: Sharp, options?: ImageminOptions): Promise<Buffer | undefined>;
