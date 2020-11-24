import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Legend({ color, text, spacing, ...other }) {
  return (
    <Container {...other}>
      <span
        style={{
          height: 10,
          width: 10,
          background: color,
          borderRadius: '50%',
        }}
      />
      <span style={{ fontSize: 14, color: '#808080', marginLeft: spacing }}>
        {text}
      </span>
    </Container>
  );
}

Legend.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Legend.defaultProps = {
  color: '#808080',
  text: '-',
  spacing: 16,
};

export default Legend;
