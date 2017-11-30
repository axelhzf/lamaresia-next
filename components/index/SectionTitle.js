import React from 'react';

export class SectionTitle extends React.Component {
  render() {
    const { title, name } = this.props;
    return (
      <div>
        {name && <a name={name} />}
        <h3 className="title">{title}</h3>
        <style jsx>{`
          .title {
            font: 700 36px/36px 'Montserrat', sans-serif;
            color: #222;
            margin: 60px 0;
            text-transform: uppercase;
            position: relative;
            text-align: center;
          }

          .title:before {
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
        `}</style>
      </div>
    );
  }
}
