import { createConnection } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

const connection = await createConnection({
  host: process.env.DB_HOST, // Replace with your MySQL host
  user: process.env.DB_USER, // Replace with your MySQL username
  password: process.env.DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DB_NAME, // Replace with your MySQL database name
});

export const db = drizzle(connection);
