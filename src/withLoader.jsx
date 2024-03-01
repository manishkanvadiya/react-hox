// HOC

import React, { useState } from 'react';

const withLoader = (WrapperComponents) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return (
      <>
        {loading ? <span>Loading...</span> : <WrapperComponents {...props} />}
      </>
    );
  };
};

export default withLoader;
