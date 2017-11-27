import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';

export default class Page extends React.Component {

  static getInitialProps = async (props) => {
    const { query } = props;
    if (!query.id) return {};
    const response = await fetchQuery(gql`
      query($id: String!) {
        page: Page(key: $id) {
          id
          title
          excerpt
          body,
          images {
            id
            url
          }
        }
      }
    `, { id: query.id });
    return response;
  }

  render () {
    const { page } = this.props;
    return (
      <Layout>
        <Content>

          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.body }} />
          {page.images.map((image) => (
            <div key={image.id}>
              <img src={image.url} />
            </div>
          ))}
        </Content>
      </Layout>
    )
  }
}