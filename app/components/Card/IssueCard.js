import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';

function IssueCard({ issueName, issuedTime, clientName, clientLogo }) {
  return (
    <div style={{ width: '100%' }}>
      <Row style={{ marginBottom: 8, fontSize: 12, fontWeight: 'bold' }}>
        {issueName}
      </Row>
      <Row style={{ marginBottom: 8, fontSize: 12 }}>{issuedTime}</Row>
      <Row style={{ marginBottom: 12, fontSize: 12 }}>
        <img
          src={clientLogo}
          style={{
            width: 24,
            height: 24,
            marginRight: 8,
            backgroundColor: '#fff',
            borderRadius: '50%',
          }}
          alt="Enterprise Logo"
        />
        {clientName}
      </Row>
      <div
        className="ant-divider"
        style={{ margin: '12px 0px', border: '1px solid #d4d4d4' }}
      />
    </div>
  );
}

IssueCard.propTypes = {
  issueName: PropTypes.string,
  issuedTime: PropTypes.string,
  clientName: PropTypes.string,
  clientLogo: PropTypes.string,
};

IssueCard.defaultProps = {
  issueName: '',
  issuedTime: '',
  clientName: '',
  clientLogo: '',
};

export default IssueCard;
