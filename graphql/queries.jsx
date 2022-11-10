import { gql } from "@apollo/client";

const COMPANY_CATEGORY = gql`
  query MyQuery {
    companies {
      avatar {
        url
      }
      id
      slug
    }
  }
`;

const GET_COMPANY = gql`
  query getCompany($slug: String!) {
    company(where: { slug: $slug }) {
      id
      name
      country
      avatar {
        url
      }
      description {
        text
      }
      post {
        carName
        id
        slug
        coverPhoto {
          url
        }
      }
    }
  }
`;

const GET_POST = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      carName
      id
      coverPhoto {
        url
      }
      content {
        text
      }
      company {
        country
        name
        avatar {
          url
        }
      }
    }
  }
`;

const GET_SLUGS = gql`
  query {
    companies {
      slug
      id
    }
  }
`;

const GET_FIRST_POST_ROW = gql`
  query MyQuery($slug: String!) {
    company(where: { slug: $slug }) {
      name
      country
      post {
        carName
        id
      }
    }
  }
`;

export {
  COMPANY_CATEGORY,
  GET_COMPANY,
  GET_POST,
  GET_SLUGS,
  GET_FIRST_POST_ROW,
};
