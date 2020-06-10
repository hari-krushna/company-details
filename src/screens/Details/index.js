import React, {Component} from 'react'
import {connect} from 'react-redux';

import DetailsView from './View';

class DetailsScreen extends Component {
  render() {
    return <DetailsView company={this.props.company} />;
  }
}

const mstp = ({ company }) => {
    return {
      company: company.companyDetails
    }
  }

export default connect(mstp)(DetailsScreen);
