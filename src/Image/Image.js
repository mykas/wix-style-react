import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.st.css';

const Image = ({
  dataHook,
  source,
  width,
  height,
  fit,
  position,
  lazy,
  ...otherProps
}) => {
  const isTiled = fit === 'tile';
  const style = isTiled
    ? {
        backgroundPosition: position,
        backgroundImage: source ? `url(${source})` : undefined,
      }
    : {
        objectFit: fit,
        objectPosition: position,
      };

  return (
    <img
      {...styles('root', { tiled: isTiled }, otherProps)}
      data-hook={dataHook}
      src={source}
      width={width}
      height={height}
      style={style}
      loading={lazy ? 'lazy' : undefined}
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
  fit: PropTypes.oneOf(['contain', 'cover', 'tile', 'none']),

  /**
   * Image source content position inside an element box. Any valid
   * [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value)
   * value.
   */
  position: PropTypes.string,

  /**
   * Lazy load the image when it reaches a calculated distance from the viewport
   * (as defined by the browser).
   */
  lazy: PropTypes.bool,
};

Image.defaultProps = {
  fit: 'cover',
  position: 'center',
  lazy: false,
};

Image.displayName = 'Image';

export default Image;
