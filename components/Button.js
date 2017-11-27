import Link from 'next/link';
export const Button = ({ href, children }) => (
  <span className="link">
    <Link href={href}>
      {children}
    </Link>
    <style jsx>
      {`
        .link :global(a) {
          padding: 19px 40px;
          border: 1px solid #444;
          font: 700 14px/14px 'Montserrat', sans-serif;
          color: #222;
          text-transform: uppercase;
          position: relative;
          z-index: 11;
          background: #fff;
          text-decoration: none;
          cursor: pointer;
        }

        .link :global(a:hover) {
          border: 1px solid rgba(0, 0, 0, 0);
          background: #9bc83c;
          text-decoration: none;
          color: #fff;
        }

        .link :global(a:before) {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-top: 4px solid #444;
          border-left: 4px solid #444;
          width: 23px;
          height: 23px;
        }

        .link :global(a:after) {
          content: '';
          position: absolute;
          right: -2px;
          bottom: -2px;
          border-bottom: 4px solid #444;
          border-right: 4px solid #444;
          width: 23px;
          height: 23px;
        }
      `}
    </style>
  </span>
);