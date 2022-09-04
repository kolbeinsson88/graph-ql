const { gql } = require('apollo-server');

const types = require('./types');
const inputs = require('./inputs');
const queries = require('./queries');
const mutations = require('./mutations'); 
const scalar = `scalar DateTime`;

const typeDefinitions = gql`
    ${scalar}
    ${types}
    ${inputs}
    ${queries}
    ${mutations}
`;

module.exports = {
    typeDefinitions,
};



/*

  house(id: 1) {
    HouseID
    Name
		LordsFirstName
    LordsLastName
    HeirsFirstName
    HeirsLastName
    Overlord
    AuthorStamp
  }
  
  character(id: 3) {
    CharacterID
    Name
    Gender
    House
    Honorific
    BodyMass
    BirthYear
    AuthorStamp
  }
  
  culture(id: 1) {
    CultureID
    Custom
    Continent
    Name
    Region
    Religion
    AuthorStamp
  }
  
  createHouse(input:{
        name: "name"
        arms: "arms" 
        words: "words" 
        lordFirstName: "lordsfirst" 
        lordsLastName: "lordslast" 
        heirFirstName: "heirsfirst" 
        heirLastName: "heirlast"  
        overlord: "overlord" 
        seat: "seat" 
        religion: "religion"
  }) {
    HouseID
    Name
    Religion
    Arms
    AuthorStamp
    LordsLastName
    LordsFirstName
    Overlord
    Words
    Seat
  }
*/