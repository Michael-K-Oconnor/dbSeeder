const projectData = require("./projectData.json");
const pledgeData = require("./pledgeData.json");
const fs = require("fs");

let projectsSchematxt = fs.readFileSync("./projectsSchema.sql", "utf8");
projectsSchematxt = JSON.stringify(projectsSchematxt);
projectsSchematxt = projectsSchematxt.replace(/\\n/gi, "");
projectsSchematxt = projectsSchematxt.replace(/"/gi, "");

let pledgesSchematxt = fs.readFileSync("./pledgesSchema.sql", "utf8");
pledgesSchematxt = JSON.stringify(pledgesSchematxt);
pledgesSchematxt = pledgesSchematxt.replace(/\\n/gi, "");
pledgesSchematxt = pledgesSchematxt.replace(/"/gi, "");

const seeder = database => {
  return knex
    .raw(`DROP DATABASE IF EXISTS ${database.name};`)

    .then(() => {
      console.log(`${database.name} database dropped`);
      return knex.raw(`CREATE DATABASE ${database.name};`);
    })
    .then(() => {
      console.log(`${database.name} database created`);
      return knex.destroy();
    })
    .then(() => {
      console.log("Connection ended");
      knex = require("knex")({
        client: "pg",
        connection: {
          database: database.name
        }
      });
      console.log(`New Connection to ${database.name}`);
      return knex.raw(database.schema);
    })
    .then(() => {
      console.log("New table created");
      return knex(database.tableName).insert(database.data);
    })
    .catch(err => {
      console.log("There was an err: ", err);
      return knex.destroy();
    });
};

let databases = [
  {
    name: "projects",
    schema: projectsSchematxt,
    data: projectData,
    tableName: "projects"
  },
  {
    name: "related_projects",
    schema: projectsSchematxt,
    data: projectData,
    tableName: "projects"
  },
  {
    name: "pledges",
    schema: pledgesSchematxt,
    data: pledgeData,
    tableName: "pledges"
  }
];

var knex = require("knex")({
  client: "pg",
  connection: {
    database: "postgres"
  }
});

seeder(databases[0])
  .then(() => {
    console.log("compelted projects initialization");
    return seeder(databases[1]);
  })
  .then(() => {
    console.log("compelted related_projects initialization");
    return seeder(databases[2]);
  })
  .then(() => {
    console.log("compelted pledges initialization");
    return knex.destroy();
  });
