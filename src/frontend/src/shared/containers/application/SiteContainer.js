import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteSite, getSite, getSites, patchSite, postSite} from '../../actions/site';


class SiteContainer extends Component {
  static propTypes = {
    'Layout': PropTypes.func.isRequired
  };

  static defaultProps = {};

  render() {
    const {Layout}    = this.props;
    const layoutProps = {
      getSite   : this.props.getSite,
      getSites  : this.props.getSites,
      deleteSite: this.props.deleteSite,
      patchSite : this.props.patchSite,
      postSite  : this.props.postSite,
    };

    return (
      <Layout {...layoutProps}/>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getSite,
  getSites,
  deleteSite,
  patchSite,
  postSite,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteContainer);
