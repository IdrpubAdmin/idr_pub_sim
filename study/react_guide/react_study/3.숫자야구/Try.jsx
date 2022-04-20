import React, { PureComponent } from 'react';

class Try extends PureComponent { // PureComponent : porps나 state가 바뀌었는지 알아차리고 재랜더링이 일어나지 않도록함 > 성능개선
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
