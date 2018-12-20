CREATE TABLE pledges (
  id SERIAL,
  goal int,
  pledged decimal(20, 2),
  backer_count int,
  days_left int
);