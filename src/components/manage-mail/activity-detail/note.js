import React from 'react';
import PropTypes from 'prop-types';
import { GlobalUtilityStyle } from '../../../container/styled';

function Note({ dataNote }) {
  return (
    <GlobalUtilityStyle>
      {dataNote?.map((rowData, index) => (
        <div className="note-div" key={index}>
          <div className="note-div-email">
            <span>{rowData.time}</span> by <span>{rowData.email}</span>
          </div>
          <div className="note-div-content">{rowData.content}</div>
        </div>
      ))}
    </GlobalUtilityStyle>
  );
}
Note.propTypes = {
  dataNote: PropTypes.any,
};
export default Note;
