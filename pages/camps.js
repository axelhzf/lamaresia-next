import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

export default class Page extends React.Component {
  static getInitialProps = async props => {
    const { query } = props;
    if (!query.id) return {};
    const response = await fetchQuery(
      gql`
        query($id: ID!) {
          camp: Camp(id: $id) {
            id
            title
            excerpt
            body
            price
            mainImage {
              url
            }
          }
        }
      `,
      { id: query.id }
    );
    return response;
  };

  render() {
    const { camp } = this.props;
    return (
      <Layout>
        <Hero url={camp.mainImage.url} title={camp.title} />
        <Content>
          <div dangerouslySetInnerHTML={{ __html: camp.body }} />
        </Content>
      </Layout>
    );
  }
}
