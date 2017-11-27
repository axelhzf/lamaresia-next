export const BackgroundImage = ({ src, className, children }) => (
  <div className={`container ${className || ''}`} style={{ backgroundImage: `url(${src})` }}>
    {children}
    <style jsx>{`
      .container {
        background-size: cover;
        background-position: center center;
      }
    `}</style>
  </div>
);
