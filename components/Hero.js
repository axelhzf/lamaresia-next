import { AspectRatio } from '../components/AspectRatio';
import { BackgroundImage } from '../components/BackgroundImage';

export const Hero = ({ url, title, subtitle }) => (
  <div className="hero">
    <BackgroundImage className="photo" src={url}>
      {(title || subtitle) && (
        <div className="overlay">
          {title && <div className="title">{title}</div>}
          {subtitle && <div className="subtitle">{subtitle}</div>}
        </div>
      )}
    </BackgroundImage>
    <style jsx>{`
      .hero {
        height: 250px;
        width: 100%;
      }

      .hero :global(.photo) {
        height: 100%;
      }

      .overlay {
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        color: #fff;
        font-size: 300%;
        line-height: 1;
        font-weight: bold;
        text-align: center;
      }

      .subtitle {
      }
    `}</style>
  </div>
);
