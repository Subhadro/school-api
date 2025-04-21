const db = require('./db');

const createSchoolsTable = `
  CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
  )
`;

const seeding = async () => {
    try {
        await db.query(createSchoolsTable)
    } catch (error) {
        console.log(error)
    }
}

seeding()