const fs = require("fs");

let projects = require("./projectDataOld.json");
let pledges = require("./pledgeData.json");

let newArr = [];

for (let i = 0; i < projects.length; i++) {
  let pledged = Math.floor(Math.random() * pledges[i].goal * 0.1) * 10;
  let backer_count = Math.floor(pledged / (Math.random() * 90 + 10));
  let newObj = {
    name: projects[i].name,
    creator: projects[i].creator,
    creator_img: projects[i].creator_img,
    blurb: projects[i].blurb,
    thumbnail: projects[i].thumbnail,
    full_img: projects[i].full_img,
    location: projects[i].location,
    category: projects[i].category,
    goal: pledges[i].goal,
    pledged: pledged,
    backer_count: backer_count,
    days_left: Math.floor(Math.random() * 50) + 2
  };
  newArr.push(newObj);
}

fs.writeFile("projectData.json", JSON.stringify(newArr), () => {});
