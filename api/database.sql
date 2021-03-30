CREATE DATABASE address_book;

CREATE TABLE contacts(
  contact_id  SERIAL PRIMARY KEY, 
  first_name TEXT,
  last_name TEXT,
  phone_number BIGINT,
  email TEXT
);

ALTER TABLE individuals RENAME TO contacts;

INSERT INTO contacts (
  contact_id, first_name, last_name, phone_number, email
  ) VALUES ('1', 'Meia', 'May', '5555555', 'hi@hi.com');
