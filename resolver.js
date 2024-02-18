import mongoose from "mongoose";
import { Author } from "./models/authorModel.js";
import { Game } from "./models/gameModel.js"
import { Review } from "./models/reviewModel.js"

export const resolvers = {
    Query: {
        games: async () => {
            try {
                const games = await Game.find({});
                return games;
            }
            catch (err) {
                console.error("Error fetching games:", err.message);
                throw new Error("Error fetching Games");
            }
        },
        authors: async () => {
            try {
                const authors = await Author.find({});
                return authors;
            }
            catch (err) {
                console.error("Error fetching authors:", err.message);
                throw new Error("Error fetching authors");
            }
        },
        reviews: async () => {
            try {
                const reviews = await Review.find({});
                return reviews;
            }
            catch (err) {
                console.error("Error fetching reviews:", err.message);
                throw new Error("Error fetching reviews");
            }
        },
        game: async (_, { id }) => {
            try {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error('Invalid Game ID');
                }
                const game = await Game.findById(id);
                if (!game) {
                    throw new Error('Game not found');
                }
                return game;
            }
            catch (err) {
                console.error("Error fetching game:", err.message);
                throw new Error("Error fetching game");
            }
        },
        author: async (_, { id }) => {
            try {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error('Invalid Author ID');
                }
                const author = await Author.findById(id);
                if (!author) {
                    throw new Error('Author not found');
                }
                return author;
            }
            catch (err) {
                console.error("Error fetching author:", err.message);
                throw new Error("Error fetching author");
            }
        },
        review: async (_, { id }) => {
            try {
                if (!mongoose.Types.ObjectId.isValid(id)) {
                    throw new Error('Invalid Review ID');
                }
                const review = await Review.findById(id);
                if (!review) {
                    throw new Error('Review not found');
                }
                return review;
            }
            catch (err) {
                console.error("Error fetching review:", err.message);
                throw new Error("Error fetching review");
            }
        }
    },
    Game: {
        reviews: async (parent) => {
            try {
                const reviews = await Review.find({ gameId: parent.id });
                return reviews;
            }
            catch (err) {
                console.error("Error fetching reviews:", err.message);
                throw new Error("Error fetching reviews");
            }
        }
    },
    Author: {
        reviews: async (parent) => {
            try {
                const reviews = await Review.find({ authorId: parent.id });
                return reviews;
            }
            catch (err) {
                console.error("Error fetching reviews:", err.message);
                throw new Error("Error fetching reviews");
            }
        }
    },
    Review: {
        game: async (parent) => {
            try {
                const game = await Game.findById(parent.gameId);
                return game;
            }
            catch (err) {
                console.error("Error fetching game:", err.message);
                throw new Error("Error fetching game");
            }
        },
        author: async (parent) =>{
            try {
                const author = await Author.findById(parent.authorId);
                return author;
            }
            catch (err) {
                console.error("Error fetching author:", err.message);
                throw new Error("Error fetching author");
            }
        }
    },
    Mutation: {
        addGame: async (_, { game }) => {
            try {
                const newGame = await Game.create(game);
                return newGame;
            } catch (error) {
                console.error("Error creating game:", error.message);
                throw new Error("Failed to create game");
            }
        },
        addAuthor: async (_, { author }) => {
            try {
                const newAuthor = await Author.create(author);
                return newAuthor;
            }
            catch (error) {
                console.error("Error creating author:", author);
                throw new Error("Failed to create author");
            }
        },
        addReview: async (_, { review }) => {
            try {
                const { gameId, authorId, ...reviewData } = review;

                // Check if gameId and authorId are provided
                if (!gameId || !authorId) {
                    throw new Error('Game ID and Author ID are required');
                }

                // Check if game and author exist
                const game = await Game.findById(gameId);
                const author = await Author.findById(authorId);
                if (!game) {
                    throw new Error('Game not found');
                }
                if (!author) {
                    throw new Error('Author not found');
                }

                // Create and return the new review
                const newReview = await Review.create({
                    ...reviewData,
                    gameId,
                    authorId
                });
                return newReview;
            } catch (error) {
                console.error("Error creating review:", error);
                throw new Error("Failed to create review");
            }
        }
    }
}
