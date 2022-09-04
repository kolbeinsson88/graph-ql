module.exports = `
     type Query {
         allCharacters: [Character!]!
         allCultures: [Culture!]!
         allHouses: [House!]!
         allGameOfThrones: GameOfThrones
         house(id: Int): House!
         culture(id: Int): Culture!
         character(id: Int): Character!
     }

`;

