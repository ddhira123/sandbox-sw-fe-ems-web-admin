/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Result, Button } from 'antd';

export default function NotFound(props) {
  // eslint-disable-next-line react/prop-types
  const { history } = props;

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.replace('/')}>
          Back Home
        </Button>
      }
    />
  );
}
