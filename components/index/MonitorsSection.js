import React from 'react';
import { SectionTitle } from './SectionTitle';
import { AspectRatio } from '../AspectRatio';
import { BackgroundImage } from '../BackgroundImage';

export class MonitorsSection extends React.Component {
  render() {
    const { monitors } = this.props;
    return (
      <div>
        <SectionTitle name="monitores" title="Monitores" />
        <div className="monitors">
          {monitors.map(monitor => (
            <Monitor key={monitor.id} monitor={monitor} />
          ))}
        </div>
        <style jsx>{`
          .monitors {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 10px;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

const Monitor = ({ monitor }) => (
  <div className="monitor">
    <AspectRatio ratio={1}>
      <BackgroundImage className="photo" src={monitor.photo.url}/>
    </AspectRatio>
    <h3>{monitor.name}</h3>
    <p>{monitor.bio}</p>
    <style jsx>{`
      .monitor :global(.photo) {
        border-radius: 100%;
        width: 100%;
        height: 100%;
      }

      h3 {
        font: 400 20px;
        color: #222;
        clear: both;
        overflow: hidden;
        margin: 20px 0 18px 0;
        position: relative;
        text-align: center;
      }

      p {
        text-align: center;
        display: block;
        color: #777;
      }
    `}</style>
  </div>
);
