import { Router } from 'express'
import {
  createAttendantsController,
  deleteAttendantController,
  listAttendantsController,
  updateAttendantController,
} from '../controllers/attendants.controller'

export const attendantsrouter = Router()

attendantsrouter.post('/create', createAttendantsController)
attendantsrouter.get('/listar/:id?', listAttendantsController)
attendantsrouter.put('/alterar/:id', updateAttendantController)
attendantsrouter.delete('/deletar/:id', deleteAttendantController)
