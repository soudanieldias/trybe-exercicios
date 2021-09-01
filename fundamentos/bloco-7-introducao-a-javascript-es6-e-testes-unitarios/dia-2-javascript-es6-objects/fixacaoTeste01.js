const starships = {
    option1: "Tardis",
    option2: "Millennium Falcon",
    option3: "Enterprise",
    option4: "Heart of Gold"
  }
let allValues = Object.values(starships);
let allEntries = Object.entries(starships);
console.log(allValues);
console.log(allEntries);

const top3Albums = {
    1 : 'Nightfall in Middle-Earth',
    2 : 'Imaginations from the Other Side',
    3 : 'Somewhere Far Beyond',
};

let top3Entries = Object.entries(top3Albums);
console.log(top3Entries);