import { autenticationModels } from '../models/autentication.models.js';

const createUser = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;

  try {
    if (!email || !password || !rol || !lenguage)
      throw new Error('All inputs must be completed');
    autenticationModels.create(email, password, rol, lenguage);
  } catch (error) {
    console.error(error);
  }
};

export const autenticationController = {
  createUser,
};
