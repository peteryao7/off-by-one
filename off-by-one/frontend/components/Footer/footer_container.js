import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';

const mapStateToProps = state => ({
  entities: state.entities
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
