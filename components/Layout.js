import Head from 'next/head';
import { Link } from './Link';
import { global } from './globalStyles';

export const Layout = ({ children }) => (
  <div>
    <Head>
      <title>La maresia</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700"
        rel="stylesheet"
      />
    </Head>
    <div>
      <Social />
      <Content>
        <Header />
        <Menu />
      </Content>
    </div>
    <div>{children}</div>
    <style global jsx>
      {global}
    </style>
  </div>
);

export const Header = () => (
  <div className="header">
    <div className="header-left">
      <img className="logo" src="/static/logo.png" />
    </div>
    <div className="header-right">
      <div className="info">
        <div className="info-icon">
          <i className="fa fa-phone fa-2x" />
        </div>
        <div className="info-content">
          <div className="title">Más información y reservas</div>
          <div className="number">
            <a href="tel:034922561283">922 561 283</a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .header {
        display: flex;
        align-items: center;
      }

      .header-left {
        flex: 1;
        display: flex;
        align-items: center;
      }

      .logo {
        height: 100px;
        display: block;
        margin: 0;
      }

      .header-right {
      }

      .info {
        display: flex;
      }

      .info-icon {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info-content {
        flex: 1;
      }

      .info-content .title {
        color: #666;
        margin-right: 10px;
      }

      .info-content .number {
        font-weight: bold;
        color: #333;
        font-size: 20px;
      }

      .info-content .number a {
        text-decoration: none;
        color: inherit;
      }

      @media (max-width : 375px) {
        .header {
          flex-direction: column;
        }

        .header-left {
          margin-bottom: 20px;
        }
      }
    `}</style>
  </div>
);

export const Content = ({ children }) => (
  <div className="content">
    {children}
    <style jsx>{`
      .content {
        width: 1170px;
        margin: 0 auto;
        max-width: 95%;
      }
    `}</style>
  </div>
);

const Social = () => (
  <div className="social">
    <Content>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/CampamentoMaresia"
            target="blank"
            rel="nofollow"
          >
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lamaresia"
            target="blank"
            rel="nofollow"
          >
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a
            href="http://www.twitter.com/lamaresia"
            target="blank"
            rel="nofollow"
          >
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="mailto:info@lamaresia.com" className="email">
            <i className="fa fa-envelope" />
            <span>info@lamaresia.com</span>
          </a>
        </li>
      </ul>
    </Content>
    <style jsx>{`
      .social {
        background-color: #f3f3f3;
        border-bottom: 1px solid #c5c5c5;
        margin-bottom: 20px;
      }

      .social ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
      }

      .social li {
        padding: 0;
        margin: 0;
        height: 100%;
      }

      .social a {
        color: #6c6c6c;
        text-decoration: none;
        display: block;
        padding: 14px 14px;
        border: none;
        height: 100%;
      }

      .social a:hover {
        background-color: #91c135;
        color: #fff;
      }

      .social a.email {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .email span {
        font-size: 14px;
        margin-left: 10px;
      }
    `}</style>
  </div>
);

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/#maresia">La Maresía</Link>
    </li>
    <li>
      <Link href="/#campamentos">Campamentos</Link>
    </li>
    <li>
      <Link href="/#servicios">Servicios</Link>
    </li>
    <li>
      <Link href="/#monitores">Monitores</Link>
    </li>
    <li>
      <Link href="/multimedia">
        Multimedia
      </Link>
    </li>
    <style jsx>{`
      .menu {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        border: 1px solid #ccc;
        margin: 0 20px;
        position: relative;
        top: 24px;
        z-index: 1;
        background-color: #fff;
        flex-wrap: wrap;
      }

      .menu li {
        flex: 1;
        text-align: center;
        margin: 3px 0;
      }

      .menu :global(a) {
        display: block;
        padding: 7px;
        text-decoration: none;
        color: #333;
        text-transform: uppercase;
        font-size: 14px;
        border-right: 1px solid #ccc;
        height: 100%;
      }

      .menu li:last-child :global(a) {
        border-right: none;
      }

      .menu :global(a:hover) {
        color: #91c135;
      }
    `}</style>
  </ul>
);
