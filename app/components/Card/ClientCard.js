import React from 'react';
import { Row, Col, Card } from 'antd';
import { FaEllipsisH } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ClientCard({ clientName, clientLogo }) {
  return (
    <Card
      style={{
        marginRight: 20,
        marginBottom: 20,
        border: '1px solid #D4D4D4',
        width: 248,
      }}
    >
      <Row justify="space-between" align="top" style={{ marginBottom: 15 }}>
        <Col span={22}>
          <img
            src={clientLogo}
            alt="Logo client"
            style={{
              height: '60px',
              width: '60px',
              borderRadius: '50%',
              border: '1px solid #EAEAEA',
            }}
          />
        </Col>
        <Col span={2}>
          <button
            type="button"
            style={{ background: 'transparent', border: 'none' }}
          >
            <FaEllipsisH />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            data-testid="title"
            style={{
              margin: '16px 0px',
              fontWeight: 700,
              fontFamily: 'roboto',
            }}
          >
            {clientName}
          </div>
        </Col>
      </Row>
    </Card>
  );
}

ClientCard.propTypes = {
  clientName: PropTypes.string,
  clientLogo: PropTypes.string,
};

ClientCard.defaultProps = {
  clientName: '',
  clientLogo: '',
};

export default ClientCard;
