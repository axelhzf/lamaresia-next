import React from 'react';
import { Page } from './Page';
import { SectionTitle} from './SectionTitle';

export class ServicesSection extends React.Component {
  render() {
    const { pages } = this.props;
    return (
      <div>
        <SectionTitle name="servicios" title="Servicios"/>
        {pages.map(page => <Page key={page.id} page={page}/>)}
      </div>
    )
  }
}