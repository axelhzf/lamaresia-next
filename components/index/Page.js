import { Button } from '../Button'

export const Page = ({ page }) => (
  <div className="page">
    <div className="page-title">{page.title}</div>
    <div className="page-content">
      <div className="left">
        <div className="excerpt">{page.excerpt}</div>
        <Button href={{ pathname: '/page', query: { id: page.key } }}>
          Ver más
        </Button>
      </div>
      <div className="right">
        <div className="page-images">
          {page.images
            .slice(0, 2)
            .map(image => (
              <img className="page-image" src={image.url} key={image.url}/>
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

      .page-image {
        width: 300px;
        margin-left: 7px;
      }
    `}</style>
  </div>
);