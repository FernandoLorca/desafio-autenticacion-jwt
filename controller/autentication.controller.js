import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { pool } from '../database/connections.js';

import { autenticationModels } from '../models/autentication.models.js';

const createUser = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;

  try {
    if (!email || !password || !rol || !lenguage)
      throw new Error('All inputs must be completed');

    autenticationModels.create(email, password, rol, lenguage);
    res.status(200).json({
      ok: true,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw new Error('Email and password are required');

    const rows = await autenticationModels.getUser(email);
    const passwordVerification = await bcryptjs.compare(
      password,
      rows[0].password
    );
    // Verificacion de contraseña. 'Deshadhear'
    if (!passwordVerification) throw new Error('Password failed');
    // Generar jwt
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
  }
};

const getUsersInfo = async (req, res) => {
  const { email, password } = req.body;
  try {
    if ((!email, !password)) throw new Error('Email and password are required');

    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    res.json({ rows });
  } catch (error) {
    console.error(error);
  }
};

export const autenticationController = {
  createUser,
  loginUser,
  getUsersInfo,
};
