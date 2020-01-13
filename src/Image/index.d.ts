import * as React from 'react';

export interface ImageProps {
  dataHook?: string;
  buttonText?: string;
}

export default class Image extends React.PureComponent<ImageProps>{}
