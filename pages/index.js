import React from 'react';
import { fetchQuery, gql } from '../lib/fetchQuery';
import { Content, Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { CampsSection} from '../components/index/CampsSection';
import { LaMaresiaSection } from '../components/index/LaMaresiaSection';
import { ServicesSection } from '../components/index/ServicesSection';
import { MonitorsSection } from '../components/index/MonitorsSection'
import { Testimonials} from '../components/index/Testimonials';


export default class Index extends React.Component {

  static async getInitialProps() {
    const response = await fetchQuery(gql`
      query {
        camps: allCamps {
          id
          title
          excerpt
          price
          mainImage {
            url
          }
          body
          campFeatures {
            id
            name
            icon
          }
        }
        info: Page(key: "la-maresia") {
          title
          excerpt
          key
          images {
            url
          }
        }
        pages: allPages(filter: { key_not: "la-maresia" }) {
          id
          key
          title
          excerpt
          images {
            url
          }
        }
        monitors: allMonitors(orderBy: name_ASC) {
          id
          name
          bio
          photo {
            url
          }
        }
        testimonials: allTestimonials {
          id
          name
          content
          image {
            url
          }
        }
      }
    `);
    return response;
  };

  render() {
    const { camps, info, pages, monitors, testimonials } = this.props;
    return (
      <Layout>
        <Hero url="static/leaf.jpg" title="Campamento la Maresia"/>
        <Content>
          <LaMaresiaSection info={info}/>
          <CampsSection camps={camps} />
          <ServicesSection pages={pages} />
        </Content>
        <Testimonials testimonials={testimonials}/>
        <Content>
          <MonitorsSection monitors={monitors} />
        </Content>
      </Layout>
    )
  }

}
