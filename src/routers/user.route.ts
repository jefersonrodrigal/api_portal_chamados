/*
Recebe Requisição e encaminha para -> Controller especifico
*/
import { Router } from 'express'
import {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
} from '../controllers/user.controller'
import { celebrate, Joi, Segments } from 'celebrate'

export const userrouter = Router()

userrouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
  }),
  createUserController,
)
userrouter.get(
  '/listusers/:id?',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number(),
    }),
  }),
  listUsersController,
)

userrouter.put(
  '/alterar/:id?',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  updateUserController,
)

userrouter.delete(
  '/deletar/:id?',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  deleteUserController,
)
