import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TableEmail from '../../container/pages/TableEmail';

function PagesRoute() {
  return (
    <Routes>
      <Route index element={<TableEmail />} />
      <Route path="dataTable" element={<TableEmail />} />
    </Routes>
  );
}

export default PagesRoute;
