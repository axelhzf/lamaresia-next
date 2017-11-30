import React from 'react';
import { Page } from './Page';

export class LaMaresiaSection extends React.Component {
  render() {
    const { info } = this.props;
    if (!info) return null;
    return (
      <div>
        <a name="maresia" />
        <Page page={info} />
      </div>
    );
  }
}
