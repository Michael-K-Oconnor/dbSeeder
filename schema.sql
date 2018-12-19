DROP DATABASE IF EXISTS projects;

CREATE DATABASE projects;

\c projects;

CREATE TABLE projects (
  id SERIAL,
  name varchar(255),
  creator varchar(255),
  creatorImg varchar(255),
  blurb varchar(255),
  thumbnail varchar(255),
  fullImg varchar(255),
  location varchar(255),
  category varchar(255),
  created_at varchar(255),
  description varchar(255)
);