import express from 'express'
import authCtrl from '../../controllers/auth.controller'

const router = express.Router()

router.get('/sinh-vien', authCtrl.getSinhViens)
// router.delete('/sinh-vien/:id', authCtrl.deleteSinhVien)
router.get('/update-info/:id', authCtrl.getUpdatePage)
router.post('/update-info/:id', authCtrl.updateSinhVien)
router.get('/sinh-vien/:id', authCtrl.deleteSinhVien)
router.get('/', authCtrl.loginPage)
router.post('/', authCtrl.login)

export default router
