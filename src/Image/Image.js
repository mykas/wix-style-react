import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.st.css';

const Image = ({
  dataHook,
  source,
  width,
  height,
  fit,
  tiled,
  position,
  ...otherProps
}) => {
  const commonProps = {
    ...styles('root', {}, otherProps),
    'data-hook': dataHook,
  };

  return tiled ? (
    <div
      {...commonProps}
      style={{
        backgroundImage: source ? `url(${source})` : undefined,
        backgroundPosition: position,
        backgroundRepeat: tiled ? 'repeat' : 'no-repeat',
        backgroundSize: fit,
        width,
        height,
      }}
    />
  ) : (
    <img
      {...commonProps}
      src={source}
      width={width}
      height={height}
      style={{
        objectFit: fit,
        objectPosition: position,
      }}
    />
  );
};

Image.propTypes = {
  /** Hook for testing purposes. */
  dataHook: PropTypes.string,

  /** Image source. A default placeholder image is displayed when source is not provided. */
  source: PropTypes.string,

  /** Width of the image element box. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Height of the image element box. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Image source content fit mode inside a box. */
  fit: PropTypes.oneOf(['contain', 'cover', 'none']),

  /**
   * Image source content position inside an element box. Any valid
   * [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value)
   * value. */
  position: PropTypes.string,

  /** Use tiled display mode. */
  tiled: PropTypes.bool,
};

Image.defaultProps = {
  fit: 'cover',
  position: 'center',
  tiled: false,
};

Image.displayName = 'Image';

export default Image;
