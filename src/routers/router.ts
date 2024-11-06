import { Router } from "express";
import {create,researchAll, researchId,update,deleted} from '../controllers/clienteController'

const router : Router = Router()

router.post('/cliente',create)
router.get('/cliente',researchAll)
router.get('/cliente/:email',researchId)
router.put('/cliente/:id',update)
router.delete('/cliente/:id',deleted)

export default router
