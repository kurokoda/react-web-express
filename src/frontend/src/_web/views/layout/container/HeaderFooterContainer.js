import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

class HeaderFooterContainer extends Component {

  // Props -------------------------------------------------------------

  static propTypes = {};

  static defaultProps = {};

  // React -------------------------------------------------------------

  render() {
    return (
      <section id='app-container' className={css(styles.container)}>
        {/*<Modal config={this.props.app.get('modal')}/>*/}
        <div id='header-container' className={css(styles.header)}>
          <Header user={this.props.user}/>
        </div>
        <div id='main-container' className={css(styles.main)}>
          {this.props.children}
        </div>
        <div id='footer-container' className={css(styles.footer)}>
          <Footer/>
        </div>
      </section>
    );
  }
}

// Exports -------------------------------------------------------------

function mapStateToProps(state) {
  return {
    app : state.app,
    user: state.user,
  };
}

export default withRouter(connect(mapStateToProps, {})(HeaderFooterContainer));

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    overflow: 'auto',
    display : 'flex',
    flexFlow: 'column',
    height  : '100vh',
  },

  header: {
    flex: '0 1 80',
  },

  main: {
    display: 'flex',
    flex   : '1',
  },

  footer: {
    flex: '0 1 auto',
  },
});
