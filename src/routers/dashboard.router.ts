import { Router } from 'express'
import { verifyToken } from '../auth/auth'
import {
  createReportController,
  getReportsDashboard,
} from '../controllers/dashboard.controller'
import { celebrate, Joi, Segments } from 'celebrate'

export const dashboardrouter = Router()

dashboardrouter.post(
  '/:id?',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  verifyToken,
  createReportController,
)
dashboardrouter.get(
  '/:id?',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  verifyToken,
  getReportsDashboard,
)
