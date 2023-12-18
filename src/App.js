import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import store from './redux/store';
import Auth from './routes/auth';
import './static/css/style.css';
import './static/css/styleCustomize.css';
import config from './config/config';
import 'antd/dist/antd.less';

const NotFound = lazy(() => import('./container/pages/404'));
const ListEmail = lazy(() => import('./container/manage-mail/list-mail'));
const ActivityDetail = lazy(() => import('./container/manage-mail/activity-detail'));
const CaseDetail = lazy(() => import('./container/manage-mail/case-detail'));

const { themeColor } = config;

function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, mainContent } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
      isLoggedIn: state.auth.isLogin,
    };
  });

  const [, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);
  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          <Router basename={process.env.PUBLIC_URL}>
            {!isLoggedIn ? (
              <Routes>
                <Route path="*" element={<Navigate to="/login" />} />
                <Route path="/login/*" element={<Auth />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Navigate to="/list-email" />} />
                <Route path="/list-email" element={<ListEmail />} />
                <Route path="/manage-email/activity/:activityId" element={<ActivityDetail />} />
                <Route path="/manage-email/case/:caseId" element={<CaseDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </Router>
        </Suspense>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
