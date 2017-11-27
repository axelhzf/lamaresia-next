export const AspectRatio = ({ ratio, children }) => (
  <div className="outter" style={{ paddingTop: `${1 / ratio * 100}%` }}>
    <div className="inner">{children}</div>
    <style jsx>{`
      .outter {
        overflow: hidden;
        height: 0;
        width: 100%;
        position: relative;
      }

      .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);