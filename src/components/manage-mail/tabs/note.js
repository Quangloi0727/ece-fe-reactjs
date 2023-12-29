import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Empty } from 'antd';
import moment from 'moment';
import { GlobalUtilityStyle } from '../../../container/styled';

function Note({ dataNote }) {
  return dataNote && dataNote.length ? (
    <GlobalUtilityStyle className="mr-[30px]">
      {dataNote?.map((el, index) => (
        <div className="result-list-content" key={index}>
          <Row>
            <Col md={24} style={{ marginLeft: '30px' }}>
              <nav>
                <ul className="mb-[30px] border-b border-regular dark:border-white10" style={{ fontSize: '13px' }}>
                  <li className="mb-8">
                    <p className="mb-2 text-[13px]  text-dark dark:text-white87">
                      <span className="text-[13px]">{moment(el.whenCreated).format('DD/MM/YYYY HH:mm A')}</span>
                      <span className="text-[13px]"> by </span>
                      <span className="text-[13px]">
                        <span>{el?.user?.firstName} </span>
                        {el?.user?.lastName}
                      </span>
                    </p>
                    <p className="font-semibold text-[13px]">{el.noteData}</p>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </div>
      ))}
    </GlobalUtilityStyle>
  ) : (
    <Empty />
  );
}

Note.propTypes = {
  dataNote: PropTypes.any,
};
export default Note;
