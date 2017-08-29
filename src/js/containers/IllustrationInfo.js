import React from 'react';
import { connect } from 'react-redux';
import { InfoNav, IllustrationInfoBox } from '../components'

class IllustrationInfo extends React.Component {
  render() {
    return (
      <div>
        <InfoNav/>
        <IllustrationInfoBox/>
      </div>
    )
  }
}

IllustrationInfo = connect(
  
)(IllustrationInfo);

export default IllustrationInfo;