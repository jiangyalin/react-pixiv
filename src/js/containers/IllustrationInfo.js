import React from 'react';
import { connect } from 'react-redux';
import { InfoNav, IllustrationInfoBox } from '../components'

class IllustrationInfo extends React.Component {
  render() {
    const { infoNavData, infoBoxData } = this.props;
    return (
      <div>
        <InfoNav infoNavData={infoNavData}/>
        <IllustrationInfoBox infoBoxData={infoBoxData}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    infoNavData: store.infoNav,
    infoBoxData: store.illustrationInfoBox
  }
};

IllustrationInfo = connect(
  mapStateToProps
)(IllustrationInfo);

export default IllustrationInfo;