export const BackgroundImage = ({ src, className, children, style = {} }) => (
  <div
    className={`container ${className || ''}`}
    style={Object.assign({}, style, { backgroundImage: `url(${src})` })}
  >
    {children}
    <style jsx>{`
      .container {
        background-size: cover;
        background-position: center center;
      }
    `}</style>
  </div>
);
