import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { AspectRatio } from '../components/AspectRatio';
import { BackgroundImage } from '../components/BackgroundImage';
import { Button } from '../components/Button';
import { Hero } from '../components/Hero';

const Index = ({ camps, info, pages, monitors }) => (
  <Layout>
    <Carousel />
    <Content>
      {info && <Page page={info} />}

      <h3 className="section-title">Campamentos</h3>
      <div className="camps">
        {camps.map(camp => <Camp key={camp.id} camp={camp} />)}
      </div>

      <h3 className="section-title">Servicios</h3>
      <div className="services">
        {pages.map(page => <Page key={page.id} page={page} />)}
      </div>

      <h3 className="section-title">Monitores</h3>
      <div className="monitors">
        {monitors.map(monitor => (
          <Monitor key={monitor.id} monitor={monitor} />
        ))}
      </div>
    </Content>
    <style jsx>{`
      .section-title {
        font: 700 36px/36px 'Montserrat', sans-serif;
        color: #222;
        margin: 60px 0;
        text-transform: uppercase;
        position: relative;
        text-align: center;
      }

      .section-title:before {
        content: '';
        background: url(/static/heading-line.png) no-repeat center bottom;
        width: 100%;
        height: 16px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -28px;
        margin: auto;
      }

      .camps {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
      }

      .services {
      }

      .monitors {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        width: 100%;
      }
    `}</style>
  </Layout>
);

const Carousel = () => (
  <div className="carousel">
    <Hero url="http://campers.crunchpress.com/wp-content/uploads/2016/09/1.png" />
  </div>
);

const Page = ({ page }) => (
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
              <img className="page-image" src={image.url} key={image.url} />
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

const Camp = ({ camp }) => (
  <div className="camp" key={camp.id}>
    <div
      className="camp-image"
      style={{ backgroundImage: `url(${camp.mainImage.url})` }}
    />
    <div className="camp-content">
      <div className="camp-title">{camp.title}</div>
      <div className="camp-excerpt">{camp.excerpt}</div>
      <div>
        <Button href={{ pathname: '/camps', query: { id: camp.id } }}>
          Ver más
        </Button>
      </div>
    </div>
    <style jsx>{`
      .camp {
      }

      .camp-image {
        display: block;
        height: 0;
        padding-top: 56.25%;
        background-size: cover;
      }

      .camp-content {
        background: #fff;
        border: 1px solid #ccc;
        padding: 32px 20px;
        width: 90%;
        position: relative;
        top: -20px;
        left: 10px;
      }

      .camp-title {
        font: 400 20px 'Montserrat', sans-serif;
        color: #222;
        margin-bottom: 18px;
      }

      .camp-excerpt {
        font: 400 14px/24px 'Open Sans', sans-serif;
        color: #777;
        margin-bottom: 15px;
      }
    `}</style>
  </div>
);

const Monitor = ({ monitor }) => (
  <div className="monitor">
    <AspectRatio ratio={1}>
      <BackgroundImage className="photo" src={monitor.photo.url} />
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

Index.getInitialProps = async () => {
  const response = await fetchQuery(gql`
    query {
      camps: allCamps {
        id
        title
        excerpt
        price
        mainImage {
          url
        }
        body
      }
      info: Page(key: "la-maresia") {
        title
        excerpt
        key
        images {
          url
        }
      }
      pages: allPages(filter: { key_not: "la-maresia" }) {
        id
        key
        title
        excerpt
        images {
          url
        }
      }
      monitors: allMonitors(orderBy: name_ASC) {
        id
        name
        bio
        photo {
          url
        }
      }
    }
  `);
  return response;
};

export default Index;
