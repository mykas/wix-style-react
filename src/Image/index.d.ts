import * as React from 'react';

export type ImageFit = 'contain' | 'cover' | 'tile' | 'none';

export interface ImageProps {
  dataHook?: string;
  source?: string;
  width?: string | number;
  height?: string | number;
  fit?: ImageFit;
  position?: string;
  lazy?: boolean;
}

declare const Image: React.FC<ImageProps>;
export default Image;
