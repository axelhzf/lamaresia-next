export const BackgroundImage = ({ src, className }) => (
  <div className={`container ${className || ''}`} style={{ backgroundImage: `url(${src})` }}>
    <style jsx>{`
      .container {
        background-size: cover;
        background-position: center center;
      }
    `}</style>
  </div>
);
