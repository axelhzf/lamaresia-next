import { print } from 'graphql';
import fetch from 'isomorphic-unfetch'
export { default as gql } from 'graphql-tag';

export const fetchQuery =  async (query, variables) => {
  try {
    const url = 'https://api.graphcms.com/simple/v1/cja1cdc1025zq0178qyx22jh4';
    const opts = {
      method: 'post',
      body: JSON.stringify({
        query: print(query),
        variables
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(url, opts);
    const json = await response.json();
    return json.data;
  } catch (e) {
    return e;
  }
}