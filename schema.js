export const typeDefs = `#graphql
    type Game{
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author{
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    # type: Query is Universal and should be created in all the projects
    type Query{
        reviews: [Review] # these are representing the entry points
        games: [Game]      # from where the client can access the data
        authors: [Author]  # they request from the frontend.
        review(id: ID!): Review  
        game(id: ID!): Game  # these are single item entry points
        author(id: ID!): Author 
    }
    type Mutation{
        addGame(game: addGameInput!): Game
        addAuthor(author: addAuthorInput!): Author
        addReview(review: addReviewInput!): Review
    }
    input addGameInput{
        title: String!
        platform: [String!]!
    }
    input addAuthorInput{
        name: String!
        verified: Boolean!
    }
    input addReviewInput{
        rating: Int!
        content: String!
        gameId: ID!
        authorId: ID!
    }
`

// types of dataTypes can be used are:
// Int, String, Float, Boolean, ID