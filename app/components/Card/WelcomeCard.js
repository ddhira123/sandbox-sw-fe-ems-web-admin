import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function WelcomeCard() {
  const [visible, setVisible] = useState(true);

  return (
    visible && (
      <div className="welcome">
        <Row justify="space-between">
          <Col>
            <h2 className="bold">Welcome to</h2>
            <h2>Jeager Superadmin</h2>
          </Col>
          <Col>
            <button
              type="button"
              onClick={() => setVisible(!visible)}
              style={{ background: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon icon={faTimes} style={{ color: '#fff' }} />
            </button>
          </Col>
        </Row>
      </div>
    )
  );
}
