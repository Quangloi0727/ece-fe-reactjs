import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { getListFile } from '../../../../redux/import-file/actionCreator';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../../../../constants';

function TableImport({ tableData, columns, totalData }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    const delayedDispatch = setTimeout(() => {
      if (dispatch) {
        dispatch(getListFile(page, pageSize));
      }
    }, 500);
    return () => clearTimeout(delayedDispatch);
  }, [page, pageSize, dispatch]);

  const handleChangePage = (current, pageSizeChange) => {
    setPage(current);
    setPageSize(pageSizeChange);
  };

  return (
    <div>
      <Table
        pagination={{
          total: totalData,
          showSizeChanger: true,
          onChange: handleChangePage,
          style: { fontSize: 13, justifyContent: 'center' },
        }}
        scroll={{
          x: 300,
        }}
        rowKey={(el) => el.id.key}
        columns={columns}
        dataSource={tableData}
      />
    </div>
  );
}

TableImport.propTypes = {
  tableData: PropTypes.array,
  columns: PropTypes.array,
  totalData: PropTypes.number,
};

export default TableImport;
