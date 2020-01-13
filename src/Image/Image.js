import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.st.css';

const Image = ({ dataHook, source, ...otherProps }) => {
  return (
    <div
      {...styles('root', {}, otherProps)}
      data-hook={dataHook}
      style={source && { backgroundImage: `url(${source})` }}
    >
      <img className={styles.image} src={source} />
    </div>
  );
};

Image.propTypes = {
  dataHook: PropTypes.string,
  source: PropTypes.string,
};

Image.displayName = 'Image';

export default Image;
