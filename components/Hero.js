import { AspectRatio } from '../components/AspectRatio';
import { BackgroundImage } from '../components/BackgroundImage';

export const Hero = ({ url, title, subtitle }) => (
  <div className="carousel">
    <AspectRatio ratio={16 / 3}>
      <BackgroundImage
        className="photo"
        src={url}
      >
        {(title || subtitle) && (
          <div className="overlay">
            {title && <div className="title">{title}</div>}
            {subtitle && <div className="subtitle">{subtitle}</div>}
          </div>
        )}
      </BackgroundImage>
    </AspectRatio>
    <style jsx>{`
      .carousel :global(.photo) {
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
        font-size: 70px;
        line-height: 1;
        font-weight: bold;
        text-align: center;
      }

      .subtitle {
      }
    `}</style>
  </div>
);
