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
          text-align: center;
        }

        .content {
          flex: 1;
        }

        @media (max-width : 375px) {
          .testimonial {
            flex-direction: column;
            align-items: center;
          }

          .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }

          .content {
            text-align: center;
          }
        }
      `}</style>
  </div>
);