import React, { memo } from 'react';

const Try = memo(({tryInfo}) => { // memo : props, state 변화감지
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;