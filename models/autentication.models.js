import * as dotenv from 'dotenv';
dotenv.config();

const create = async (email, password, rol, lenguage) => {
  try {
    const query =
      'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4)';
    const { rows } = await pool.query(query, [email, password, rol, lenguage]);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const autenticationModels = {
  create,
};
