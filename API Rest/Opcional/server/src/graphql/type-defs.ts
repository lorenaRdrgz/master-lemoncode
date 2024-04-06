import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Location {
    name: String
    url: String
}

type Origin {
    name: String
    url: String
}

type Character {
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    url: String
    created: String
    bestSentences: [String]
    episode: [String]
    location: Location
    origin: Origin
}

type Query {
    characters: [Character!]
}

type Query {
    character: Character!
}
`;