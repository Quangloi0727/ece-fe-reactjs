import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { ErrorWrapper } from './style';
import { GlobalUtilityStyle } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

function PermissionDenied() {
  const [state, setState] = useState({
    isLoading: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false });
    }, 1500);
  }, []);
  return (
    <GlobalUtilityStyle>
      {state.isLoading ? (
        <div className="spin">
          <Spin />
        </div>
      ) : (
        <ErrorWrapper>
          <img src={require(`../../static/img/pages/404.svg`).default} alt="404" />
          <Heading className="error-text" as="h3">
            403
          </Heading>
          <p>Sorry! You dont have permission to access page.</p>
          <NavLink to="/list-email">
            <Button size="default" type="primary" to="/list-email">
              Return Home
            </Button>
          </NavLink>
        </ErrorWrapper>
      )}
    </GlobalUtilityStyle>
  );
}
export default PermissionDenied;
