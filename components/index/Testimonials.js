import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { BackgroundImage } from '../BackgroundImage'
import { Content } from '../Layout'
import { SectionTitle } from './SectionTitle'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Testimonials = ({ testimonials }) => (
  <div className="testimonials">
    <div className="overlay">
      <Content>
        <SectionTitle title="Opiniones" invert />
        <AutoPlaySwipeableViews interval={5000}>
          {testimonials.map(testimonial => (
            <div className="testimonial" key={testimonial.id}>
              <div className="left">
                <BackgroundImage className="photo" src={testimonial.image.url}/>
                <div className="name">{testimonial.name}</div>
              </div>
              <div className="content">{testimonial.content}</div>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Content>
    </div>
    <style jsx>{`
        .testimonials {
          background-image: url('/static/testimonial-bg2.jpg');
          background-size: cover;
          background-position: center center;
          color: #fff;
          margin-top: 60px;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 60px 0;
        }

        .section-title {
          font: 700 36px/36px 'Montserrat', sans-serif;
          text-transform: uppercase;
          position: relative;
          text-align: center;
          margin-bottom: 60px;
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

        .testimonial {
          display: flex;
          align-items: center;
        }

        .testimonial :global(.photo) {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: #fff;
        }

        .left {
          width: 150px;
        }

        .content {
          flex: 1;
        }
      `}</style>
  </div>
);