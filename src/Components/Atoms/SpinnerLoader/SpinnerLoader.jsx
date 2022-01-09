import { useState } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

export const Spinner = ({ loading }) => {
  const [color] = useState('grey');
  return <ClipLoader color={color} loading={loading} size={100} />;
};

Spinner.propTypes = {
  loading: PropTypes.bool
};
