export const typeDefs = `#graphql
    type: Game{
        id: ID! # ! -- it shows that the field is required and it can't be null
        title: String!
        platform: [String!]!
    }
    type: Review{
        id: ID!
        rating: Int!
        content: String!
    }
    type: Author{
        id: ID!
        name: String!
        verified: Boolean!
    }
    # type: Query is Universal and should be created in all the projects
    type: Query{
        reviews: [Reviews] # these are representing the entry points
        games: [Game]      # from where the client can access the data
        authors: [Author]  # they request from the frontend.
    }
`

// types of dataTypes can be used are:
// Int, String, Float, Boolean, ID