import * as Joi from 'joi';

const email = Joi.string().email().required();
const password = Joi.string().min(8).required();

export const loginSchema = Joi.object().keys({
  email,
  password,
});

export default loginSchema;
