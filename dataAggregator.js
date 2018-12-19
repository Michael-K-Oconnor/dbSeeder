const fs = require("fs");

let data = require("./rawData/rawData.json");

let projects = [];

for (let project of data) {
  let temp = {
    thumbnail: project.photo.thumb,
    fullImg: project.photo.full,
    name: project.name,
    blurb: project.blurb,
    goal: project.goal,
    pledged: project.pledged,
    backerCount: project.backers_count,
    creator: project.creator.name,
    creatorImg: project.creator.avatar.medium,
    locationName: project.location.displayable_name,
    category: project.category.name
  };
  projects.push(temp);
}

console.log(projects.length);

fs.writeFile("rawData.json", JSON.stringify(projects), () => {});

module.exports = projects;

// https://www.kickstarter.com/discover/advanced?term=art&sort=magic&format=json
