import {css, StyleSheet} from 'aphrodite';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class SiteView extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const textString = 'Sites';

    return (
      <section className={css(styles.container)}>
        <div className={css(styles.content)}>
          <h2 className={css(styles.text)}>{textString}</h2>
          <br/>
          <Button block onClick={() => this.props.getSites()}>Show All Sites</Button>
          <Button block onClick={() => this.props.getSite({id: 1})}>Show Site</Button>
          <Button block onClick={() => this.props.postSite({id: 1})}>Create Site</Button>
          <Button block onClick={() => this.props.patchSite({id: 1})}>Edit Site</Button>
          <Button block bsStyle='danger' onClick={() => this.props.deleteSite({id: 1})}>Delete Site</Button>
        </div>
      </section>
    );
  }
}

export default withRouter(SiteView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display        : 'flex',
    justifyContent : 'center',
    textAlign      : 'center',
    height         : '100vh',
  },
  content  : {
    WebkitBoxFlex: 0,
    WebkitFlex   : 'none',
    MsFlex       : 'none',
    flex         : 'none',
    minWidth     : '300px',
    maxWidth     : '50%',
  },
  text     : {
    display: 'block',
  },
});