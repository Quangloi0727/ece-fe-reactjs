import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import withAdminLayout from '../../layout/withAdminLayout';

const TableEmail = lazy(() => import('../../container/pages/TableEmail'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<TableEmail />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
