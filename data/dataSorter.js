const fs = require("fs");

let projects = require("./projectData.json");
let pledges = require("./pledgeData.json");

let newArr = [];

for (let i = 0; i < projects.length; i++) {
  let pledged = Math.floor(Math.random() * pledges.goal * 0.1) * 10;
  let backer_count = Math.floor(pledged / (Math.random() * 90 + 10));
  let newObj = {
    name: projects.name,
    creator: projects.creator,
    creator_img: projects.creator_img,
    blurb: projects.blurb,
    thumbnail: projects.thumbnail,
    full_img: projects.full_img,
    location: projects.location,
    category: projects.category,
    goal: pledges.goal,
    pledged: pledged,
    backer_count: backer_count,
    days_left: Math.floor(Math.random() * 50) + 2
  };
  newArr.push(newObj);
}

fs.writeFile("projectData1.json", JSON.stringify(newArr), () => {});
