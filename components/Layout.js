import Head from 'next/head';
import { global } from './globalStyles';

export const Layout = ({ children }) => (
  <div>
    <Head>
      <title>La maresia</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700"
        rel="stylesheet"
      />
    </Head>
    <div>
      <Content>
        <div className="header">
          <div className="header-left">
            <img className="logo" src="/static/logo.png"/>
          </div>
          <div className="header-right">
            <div className="info">
              <div className="info-icon" />
              <div className="info-content">
                <div className="title">Más información y reservas</div>
                <div className="number">922 561 283</div>
              </div>
            </div>
          </div>
        </div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Trips</a></li>
          <li><a href="#">Prices</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Content>
    </div>
    <div>{children}</div>
    <style global jsx>
      {global}
    </style>
    <style jsx>
      {`
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
          background-color: red;
          width: 50px;
        }

        .info-content {
          flex: 1;
        }

        .info-content .title {
          color: #666;
        }

        .info-content .number {
          font-weight: bold;
          color: #333;
          font-size: 20px;
        }

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
        }

        .menu li {
          flex: 1;
          text-align: center;
          margin: 0;
        }

        .menu a {
          display: block;
          padding: 7px 0;
          text-decoration: none;
          color: #333;
          text-transform: uppercase;
          font-size: 14px;
          border-right: 1px solid #ccc;
          margin: 3px 0;
        }

        .menu li:last-child a {
          border-right: none;
        }

        .menu a:hover {
          color: #91C135;
        }
      `}
    </style>
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
