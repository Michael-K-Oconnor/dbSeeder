CREATE TABLE comments_info (
  id SERIAL,
  project_id int,
  username varchar(255),
  comment varchar(511),
  times date
);