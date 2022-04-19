import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  {
    allArticles(sortBy: published_at_DESC) {
      edges {
        node {
          feature_image
          _meta {
            id
            uid
          }
          title
          body {
            ... on ArticleBodyInline_text {
              type
              label
              primary {
                description
              }
            }
          }
          published_at
        }
      }
    }
  }
`;

export function GET_DETAILS(slug) {
  const GET_POST_DETAILS = gql`
    query getPost($n: String = "${slug}") {
      article(uid: $n, lang: "en-us") {
        feature_image
        title
        author {
          __typename
        }
        published_at
        body {
          ... on ArticleBodyInline_text {
            type
            label
            primary {
              description
            }
          }
        }
      }
    }`;

    return GET_POST_DETAILS;
}
