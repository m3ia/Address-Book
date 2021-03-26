CREATE DATABASE address_book;

CREATE TABLE contacts(
  contact_id  SERIAL PRIMARY KEY, 
  first_name TEXT,
  last_name TEXT,
  phone_number BIGINT,
  email TEXT
);

ALTER TABLE individuals RENAME TO contacts;