import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import moment from 'moment';
import Heading from '../../heading/heading';
import { GlobalUtilityStyle } from '../../../container/styled';

function Note({ dataNote }) {
  return (
    <GlobalUtilityStyle className="mr-[30px]">
      {dataNote?.map((el, index) => (
        <div className="result-list-content" key={index}>
          <Row>
            <Col md={24} style={{ marginLeft: '30px' }}>
              <nav>
                <ul className="mb-[30px] border-b border-regular dark:border-white10" style={{ fontSize: '13px' }}>
                  <li className="mb-8">
                    <Heading className="mb-2 text-[13px]  text-dark dark:text-white87" as="h6">
                      <span className="font-semibold text-[13px]">
                        {moment(el.whenCreated).format('DD/MM/YYYY HH:mm A')}
                      </span>
                      <span> by </span>
                      <span>{el?.user?.emailAddressPrimary || el?.user?.emailAddressSecondary}</span>
                    </Heading>
                    <p>{el.noteName}</p>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </div>
      ))}
    </GlobalUtilityStyle>
  );
}

Note.propTypes = {
  dataNote: PropTypes.any,
};
export default Note;
