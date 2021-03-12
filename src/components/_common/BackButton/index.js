import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const BackButton = ({ fontsize, color }) => {
  const location = useHistory();
  return (
    <IconButton onClick={() => location.goBack()}>
      <ArrowBackIcon
        type="button"
        style={{ fill: color || 'white', fontSize: fontsize }}
      />
    </IconButton>
  );
};
BackButton.propTypes = {
  fontsize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default BackButton;
