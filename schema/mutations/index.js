module.exports = `
    type Mutation {
        createHouse(input: HouseInput!): House!
        updateHouse(input: HouseInput!): House!
        deleteHouse(id: Int!): House!
     }
`;

