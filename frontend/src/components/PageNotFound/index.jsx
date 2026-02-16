import React from "react";

import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Page not found"
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default PageNotFound;
