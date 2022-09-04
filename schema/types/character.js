module.exports = `
    type Character { 
        CharacterID: ID!
        Honorific: String!
        Name: String!
        Height: Int!
        BodyMass: Int!
        HairColor: String!
        SkinColor: String!
        EyeColor: String!
        BirthYear: Int!
        Gender: String!
        House: String!
        Culture: String!
        Title: [String!]!
        AuthorStamp: DateTime!
    }
`;

