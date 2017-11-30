import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Button } from '../Button';

export class CampsSection extends React.Component {
  render() {
    const { camps } = this.props;
    return (
      <div>
        <SectionTitle title="Campamentos" name="campamentos" />
        <div className="camps">
          {camps.map(camp => <Camp key={camp.id} camp={camp} />)}
        </div>
        <style jsx>{`
          .camps {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;
          }

          @media (max-width : 768px) {
            .camps {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }
}

class Camp extends React.Component {
  render() {
    const { camp } = this.props;
    return (
      <div className="camp" key={camp.id}>
        <div
          className="image"
          style={{ backgroundImage: `url(${camp.mainImage.url})` }}
        />
        <div className="container">
          <div className="content">
            <div className="title">{camp.title}</div>
            <div className="excerpt">{camp.excerpt}</div>
            <div>
              <Button href={{ pathname: '/camps', query: { id: camp.id } }}>
                Ver más
              </Button>
            </div>
          </div>
          <div className="sidebar">
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
        </div>
        <style jsx>{`
          .camp {
          }

          .image {
            display: block;
            height: 0;
            padding-top: 56.25%;
            background-size: cover;
          }

          .container {
            display: flex;
            width: 90%;
            position: relative;
            top: -20px;
            left: 10px;
            background: #fff;
            border: 1px solid #ccc;
          }

          .sidebar {
            display: flex;
            flex-direction: column;
            font-size: 13px;
            line-height: 1.2;
            width: 100px;
            border-left: 1px solid #ccc;
            text-align: center;
          }

          .features {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 0 7px;
          }

          .feature {
            padding: 10px 0;
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
            padding: 14px 0;
          }

          .content {
            padding: 32px 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .title {
            font: 400 20px 'Montserrat', sans-serif;
            color: #222;
            margin-bottom: 18px;
          }

          .excerpt {
            font: 400 14px/24px 'Open Sans', sans-serif;
            color: #777;
            margin-bottom: 15px;
            flex: 1;
          }
        `}</style>
      </div>
    );
  }
}
