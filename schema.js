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
        # addGame is a mutation that will add a game to the database
        addGame(game: AddGameInput!): Game
        addAuthor(author: AddAuthorInput!): Author
        addReview(review: AddReviewInput!): Review

        # deleteGame is a mutation that will delete a game from the database
        deleteGame(id: ID!): Game
        deleteAuthor(id: ID!): Author
        deleteReview(id: ID!): Review

        # updateGame is a mutation that will update a game in the database
        updateGame(id: ID!, game: EditGameInput!): Game
        updateAuthor(id: ID!, author: EditAuthorInput!): Author
        updateReview(id: ID!, review: EditReviewInput!): Review
    }
    input AddGameInput{
        title: String!
        platform: [String!]!
    }
    input AddAuthorInput{
        name: String!
        verified: Boolean!
    }
    input AddReviewInput{
        rating: Int!
        content: String!
        gameId: ID!
        authorId: ID!
    }
    input EditGameInput{
        title: String
        platform: [String!]
    }
    input EditAuthorInput{
        name: String
        verified: Boolean
    }
    input EditReviewInput{
        rating: Int
        content: String
    }
`