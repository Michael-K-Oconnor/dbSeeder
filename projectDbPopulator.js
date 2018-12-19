const db = require("./dbConnection.js");
const { Client } = require("pg");
const data = require("./data.json");
const fs = require("fs");

// BEFORE RUNNING THIS FILE, GENERATE THE DATABASE and SCHEMA using following
// command in BASH terminal:
// psql < schema.sql

const insertData = function(data) {
  for (let i = 0; i < data.length; i++) {
    let entryArr = [
      data[i].name,
      data[i].creator,
      data[i].creatorImg,
      data[i].blurb,
      data[i].thumbnail,
      data[i].fullImg,
      data[i].location,
      data[i].category,
      "THIS WILL BE A createdAt_date",
      "THIS WILL BE A DESCRIPTION"
    ];

    let queryStr =
      "INSERT INTO projects (name, creator, creatorImg, blurb, thumbnail, " +
      "fullImg, location, category, created_at, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

    db.query(queryStr, entryArr, function(error, results) {
      if (error) {
        console.log("Error inserting into the database", error);
      }
    });
  }
};

insertData(data);

// let schematxt = fs.readFileSync("./data/schema.sql", "utf8");
// schematxt = JSON.stringify(schematxt);
// schematxt = schematxt.replace(/\\n/gi, "");
// schematxt = schematxt.replace(/"/gi, "");
