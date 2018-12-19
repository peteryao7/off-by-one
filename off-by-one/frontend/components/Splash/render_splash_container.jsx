import { connect } from 'react-redux';
import React from 'react';
import RenderSplash from './splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id
  };
};

export default connect(mapStateToProps)(RenderSplash);
