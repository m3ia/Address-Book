const express = require('express');
const app = express();
const port = 9000;
const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/address_book');
const cors = require('cors');

// express server
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// pg-promise
db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

// middleware 
app.use(cors());

// GET route for /contacts. 
app.get('/contacts', async (req, res) => {
  try {
    let contacts = await db.any('SELECT * FROM contacts;', [true]);
    contacts = contacts.map(contact => ({
      id: contact.contact_id,
      firstName: contact.first_name,
      lastName: contact.last_name,
      phoneNum: contact.phone_number,
      email: contact.email,

    }));

    res.set('Access-Control-Allow-Origin', '*');
    res.json(contacts);
  } catch (e) {
    console.log(e);
  }
});