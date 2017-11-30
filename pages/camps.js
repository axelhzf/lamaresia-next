import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

export default class Camp extends React.Component {
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
            campFeatures {
              id
              name
              icon
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
          <div className="info">
            <div className="features">
              {camp.campFeatures.map(feature => (
                <div className="feature" key={feature.id}>
                  <div className="feature-icon">
                    <i className={`fa ${feature.icon}`} />
                  </div>
                  <div className="feature-name">{feature.name}</div>
                </div>
              ))}
            </div>
            <div className="price">{camp.price}</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: camp.body }} />
        </Content>
        <style jsx>{`
          .info {
            display: flex;
            flex-direction: row;
            font-size: 13px;
            line-height: 1.2;
            width: 100px;
            text-align: center;
            width: 100%;
            justify-content: center;
            border: 1px solid #9bc83c;
            margin: 27px 0;
          }

          .features {
            display: flex;
            flex-direction: row;
            padding: 0 7px;
          }

          .feature {
            padding: 10px;
          }

          .feature-name {
          }

          .feature-icon {
            margin-bottom: 5px;
          }

          .price {
            background-color: #9bc83c;
            color: #fff;
            font-size: 16px;
            padding: 14px;
            display: flex;
            align-items: center;
          }
        `}</style>
      </Layout>
    );
  }
}
