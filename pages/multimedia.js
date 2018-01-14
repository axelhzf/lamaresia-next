import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { BackgroundImage } from '../components/BackgroundImage';
import { Hero } from '../components/Hero';

export default class Multimedia extends React.Component {
  static getInitialProps = async props => {
    const response = await fetchQuery(
      gql`
        query {
          videos: allMultimediaVideoses {
            id
            title
            youtubeid
          }
        }
      `
    );
    return response;
  };

  render() {
    const { videos = [] } = this.props;
    return (
      <Layout>
        <Hero title="Multimedia" url="/static/background-grass.jpg" />
        <Content>
          <div className="videos">
            {videos.map(video => (
              <div key={video.id}>
                <h3>{video.title}</h3>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.youtubeid}?rel=0`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </Content>
        <style jsx>{`
          .videos {
            margin-top: 40px;
            text-align: center;
          }

          .videos :global(iframe) {
            max-width: 100%;
          }
        `}</style>
      </Layout>
    );
  }
}
