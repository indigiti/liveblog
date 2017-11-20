/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EntryContainer from '../containers/EntryContainer';

import {
  triggerOembedLoad,
} from '../utils/utils';

class Entries extends Component {
  componentDidUpdate() {
    triggerOembedLoad();
  }

  render() {
    const { loading, entries } = this.props;

    return (
      <div className={loading ? 'liveblog-feed is-loading' : 'liveblog-feed'}>
        {
          entries.length === 0 && !loading
            ? <div>There are no entries</div>
            : entries.map((entry, i) => <EntryContainer entry={entry} key={i} />)
        }
        {
          loading && <span>loading...</span>
        }
      </div>
    );
  }
}

Entries.propTypes = {
  entries: PropTypes.array,
  loading: PropTypes.bool,
};

export default Entries;
