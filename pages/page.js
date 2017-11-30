import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { BackgroundImage } from '../components/BackgroundImage';
import { Hero } from '../components/Hero';

export default class Page extends React.Component {
  static getInitialProps = async props => {
    const { query } = props;
    if (!query.id) return {};
    const response = await fetchQuery(
      gql`
        query($id: String!) {
          page: Page(key: $id) {
            id
            title
            excerpt
            body
            images {
              id
              url
            }
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
    const { page } = this.props;
    return (
      <Layout>
        <Hero title={page.title} url={page.mainImage.url}/>
        <Content>
          <div className="content" dangerouslySetInnerHTML={{ __html: page.body }} />
          <div className="gallery">
            {page.images.map(image => (
              <BackgroundImage className="image" key={image.id} src={image.url} />
            ))}
          </div>
        </Content>
        <style jsx>{`
        .content {
          margin: 40px 0;
        }

        .gallery {
          display: flex;
          flex-wrap: wrap;
        }

        .gallery :global(.image) {
          width: calc(25% - 10px);
          height: 200px;
          margin: 5px;
        }

        @media (max-width : 769px) {
          .gallery :global(.image) {
            width: calc(50% - 10px);
          }
        }

        `}</style>
      </Layout>
    );
  }
}
