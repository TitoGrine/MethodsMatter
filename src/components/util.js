var data = require("../docs/elections.json");

export const parseFile = (year) => {
  let parsedFile = data[year];

  console.log(parsedFile);
};
