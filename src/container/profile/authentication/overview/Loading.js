import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

function Loading({ show }) {
  return (
    show && (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  );
}
Loading.propTypes = {
  show: PropTypes.bool,
};
export { Loading };
