import React from 'react';
import { Page } from './Page';

export class LaMaresiaSection extends React.Component {
  render() {
    const { topPages } = this.props;
    if (!topPages) return null;
    return (
      <div>
        <a name="maresia" />
        {topPages.map((page) =>
          <Page page={page} key={page.id} />)
        }
      </div>
    );
  }
}
