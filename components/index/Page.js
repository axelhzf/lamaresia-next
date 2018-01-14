import slugify from '../../lib/slugify'
import { Button } from '../Button';
import { AspectRatio } from '../AspectRatio';
import { BackgroundImage } from '../BackgroundImage';

export const Page = ({ page }) => (
  <div className="page">
    <div className="page-title">{page.title}</div>
    <div className="page-content">
      <div className="left">
        <div className="excerpt">{page.excerpt}</div>
        <div className="button">
          <Button as={`/pages/${slugify(page.key)}`} href={{ pathname: '/page', query: { id: page.key } }}>
            Ver más
          </Button>
        </div>
      </div>
      <div className="right">
        <div className="page-images">
          {page.images.slice(0, 2).map(image => (
            <div className="page-image">
              <AspectRatio ratio={16 / 9} key={image.url}>
                <BackgroundImage style={{ height: '100%' }} src={image.url} />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .page-title {
        font: 700 36px/36px 'Montserrat', sans-serif;
        color: #222;
        margin: 40px 0;
        position: relative;
      }

      .page-title:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -16px;
        width: 35px;
        height: 2px;
        background: #ccc;
      }

      .page-content {
        display: flex;
        width: 100%;
      }

      .left {
        flex: 1;
      }

      .excerpt {
        font-size: 14px;
        margin-bottom: 14px;
      }

      .right {
      }

      .page-images {
        display: flex;
        align-items: flex-start;
      }

      .page-images :global(.page-image) {
        width: 300px;
        margin-left: 7px;
      }

      @media (max-width : 1024px) {
        .page-content {
          flex-direction: column;
        }

        .left {
          order: 2;
        }

        .right {
          order: 1;
          margin-bottom: 20px;
        }

        .page-images {
          justify-content: center;
        }

        .button {
          text-align: right;
        }
      }
    `}</style>
  </div>
);
