import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',        // Προσαρμόστε τα στοιχεία σύνδεσης
  host: 'localhost',       // Ή τη διεύθυνση του remote database
  database: 'orders_db',
  password: 'yourpassword',
  port: 5432,
});

export default pool;
