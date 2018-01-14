const { fetchQuery, gql} = require('./lib/fetchQuery');
const slugify = require('slugify');
const _ = require('lodash');

async function fetchDynamics() {
  const response = await fetchQuery(
    gql`
      query {
        allPages {
          key
        }
        allCamps {
          id
          title
        }
      }
    `
  );

  const pages = response.allPages.reduce((result, page) => {
    const slug = page.key.toLowerCase();
    result[`/pages/${slug}`] = { page: '/page', query: {id : page.key }}
    return result;
  }, {});

  const camps = response.allCamps.reduce((result, camp) => {
    const slug = slugify(camp.title).toLowerCase();
    result[`/camps/${slug}`] = { page: '/camps', query: {id : camp.id }}
    return result;
  }, {});

  return _.merge(pages, camps);
}

module.exports = {
  exportPathMap: async function() {
    const dynamics = await fetchDynamics();
    const static = {
      '/': { page: '/' },
      '/multimedia': { page: '/multimedia'}
    }
    return _.merge(static, dynamics);
  }
}