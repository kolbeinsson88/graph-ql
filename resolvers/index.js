const axios = require('axios');

const fetchCharacter = (c) => {
    return {
        CharacterID: c.id,
        Honorific: c.honorific,
        Name: c.name,
        Height: c.height,
        BodyMass: c.bodyMass, 
        HairColor: c.hairColor, 
        SkinColor: c.skinColor, 
        EyeColor: c.eyeColor,
        BirthYear: c.birthYear,
        Gender: c.gender, 
        House: c.house,
        Culture: c.culture,
        Title: c.title,
        AuthorStamp: c.authorStamp
    }
}

const fetchHouse = (c) => {
    return {
        HouseID: c.id,
        Name: c.name,
        Arms: c.arms,
        Words: c.words,
        LordsFirstName: c.lordFirstName,
        LordsLastName: c.lordLastName,
        HeirsFirstName: c.heirLastName,
        HeirsLastName: c.heirLastName,
        Overlord: c.overlord,
        Seat: c.seat,
        Religion: c.religion,
        AuthorStamp: c.authorStamp
    }
}

const fetchCulture = (c) => {
    return {
        CultureID: c.id,
        Name: c.name,
        Continent: c.continent,
        Region: c.region,
        Custom: c.custom,
        Language: c.language,
        People: c.people,
        Religion: c.religion,
        AuthorStamp: c.authorStamp
    }
}

const exampleUrl = "https://example.net/api";

module.exports = {
    Query: {
        allCharacters: async () => {
            const characters = await axios.get(exampleUrl + '/characters');
            const response = characters.data.pageList.map(c => fetchCharacter(c));
            return response;
        },
        allCultures: async () => {
            const houses = await axios.get(exampleUrl + '/api/cultures');
            const response = houses.data.pageList.map(c => fetchCulture(c));
            return response;
        },
        allHouses: async () => {
            const cultures = await axios.get(exampleUrl + '/api/houses');
            const response = cultures.data.pageList.map(c => fetchHouse(c));
            return response;
        },
        house: async (parent, args) => {
            const houses = await axios.get(exampleUrl + '/api/houses');
            const house = houses.data.pageList.filter(h => h.id ===  args.id);
            return fetchHouse(house[0]);
        },
        culture: async (parent, args) => {
            const cultures = await axios.get(exampleUrl + '/api/cultures');
            const culture = cultures.data.pageList.filter(h => h.id ===  args.id);
            return fetchCulture(culture[0]);
        },
        character: async (parent, args) => {
            const characters = await axios.get(exampleUrl + '/api/characters');
            const character = characters.data.pageList.filter(h => h.id ===  args.id);
            return fetchCharacter(character[0]);
        },
        allGameOfThrones: async () => {
            const characters = await axios.get(exampleUrl + '/api/characters');
            const charactersResponse = characters.data.pageList.map(c => fetchCharacter(c));
            const cultures = await axios.get(exampleUrl + '/api/cultures');
            const culturesResponse = cultures.data.pageList.map(c => fetchCulture(c));
            const houses = await axios.get(exampleUrl + '/api/houses');
            const housesResponse = houses.data.pageList.map(c => fetchHouse(c));
            console.log(culturesResponse);
            return { Characters: charactersResponse, Houses: housesResponse, Cultures: culturesResponse };
        }
    },
    Mutations: {
        createHouse: async (parent, args) => {
            const newHouse = {
                name: args.name,
                arms: args.arms,
                words: args.words,
                lordFirstName: args.lordFirstName,
                lordsLastName: args.lordsLastName,
                heirFirstName: args.heirFirstName,
                heirLastName: args.heirFirstName,
                overlord: args.overlord,
                seat: args.seat,
                religion: args.religion
            }
            await axios.post(exampleUrl + '/api/characters', newHouse);

        },
        updateHouse: async (parent, args) => {

        },
        deleteHouse: async (parent, args) => {
            await axios.delete(exampleUrl + `/api/characters${args.id}`);
        }
    }
}


/*
# Write your query or mutation here
{
  
  allGameOfThrones {
    Cultures {
      CultureID
      Name
      Continent
      Region
      Custom
      Language
      People
      Religion
    	AuthorStamp
    }
    Houses {
      HouseID
      Name
      Arms
      Words
      LordsFirstName
      LordsLastName
      HeirsFirstName
      HeirsLastName
      Overlord
      Seat
      Religion
    	AuthorStamp
    }
    Characters {
      CharacterID
      Honorific
      Name
      Height
      BodyMass
      HairColor
      SkinColor
      EyeColor
      BirthYear
      Gender
      House
      Culture
      Title
    	AuthorStamp
    }
  }
  
	allCharacters {
    CharacterID
    Honorific
    Name
    Height
    BodyMass
    HairColor
    SkinColor
    EyeColor
    BirthYear
    Gender
    House
    Culture
    Title
    AuthorStamp
  }
  
  allHouses {
    HouseID
    Name
    Arms
    Words
    LordsFirstName
    LordsLastName
    HeirsFirstName
    HeirsLastName
    Overlord
    Seat
    Religion
    AuthorStamp
  }
  
  allCultures {
    CultureID
    Name
    Continent
    Region
    Custom
    Language
    People
    Religion
    AuthorStamp
  }
  
  
}
*/