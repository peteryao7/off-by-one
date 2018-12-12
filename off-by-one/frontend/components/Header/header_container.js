import React from 'react';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  entities: state.entities
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
