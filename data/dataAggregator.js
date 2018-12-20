const fs = require("fs");

let data = require("./rawData/rawData.json");

let projectData = [];
let pledgeData = [];

for (let project of data) {
  let projectTemp = {
    name: project.name,
    creator: project.creator.name,
    creator_img: project.creator.avatar.medium,
    blurb: project.blurb,
    thumbnail: project.photo.thumb,
    full_img: project.photo.full,
    location: project.location.displayable_name,
    category: project.category.name,
    created_at: "THIS WILL BE A createdAt_date",
    description: "THIS WILL BE A DESCRIPTION"
  };

  let pledgeTemp = {
    goal: project.goal,
    pledged: project.pledged,
    backer_count: project.backers_count,
    days_left: 42
  };

  projectData.push(projectTemp);
  pledgeData.push(pledgeTemp);
}

console.log(projectData.length);

fs.writeFile("projectData.json", JSON.stringify(projectData), () => {});
fs.writeFile("pledgeData.json", JSON.stringify(pledgeData), () => {});

// https://www.kickstarter.com/discover/advanced?term=art&sort=magic&format=json
