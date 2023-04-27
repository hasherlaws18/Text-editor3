import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.error('putDb from the database');

//Creates a connection to the database
const JateDB = await openDB('jate', 1)

//Creates a new transaction and specify the database and data privileges.
const tx = JateDB.transaction('jate', 'readwrite');

//open up the desired object store.
const store = tx.objectStore('jate');

// Passes in content
const request = store.put({id: id, value: content});

//Gets confirmation of the request
const result = await request;;
console.log('result.vaule', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { console.error('GET from the database');

//Creates a connection to the database
const JateDB = await openDB('jate', 1);

//Create a new transaction and specify the database and data privileges.
const tx = JateDB.transaction('jate', 'readonly');

//open up the desired object store.
const store = tx.objectStore('jate');

//Use the .getAll() method to get all data in the database.
const request = store.getAll();

//Get confirmation of the request
const result = await request;
console.log('result.vaule', result);
return result.value;
};

initdb();
