const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specfic topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's author"
    author: Author!
    "The track's main image to display in the track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of moudles this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
