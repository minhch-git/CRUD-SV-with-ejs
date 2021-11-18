import express from 'express'
import deTaiRoute from './de-tai.route'
import giangVienRoute from './giang-vien.route'
import huongDanRoute from './huong-dan.route'
import khoaRoute from './khoa.route'
import sinhVienRoute from './sinh-vien.route'
import baiTap1Route from './bai-tap-1.route'
import baiTap2Route from './2-bai-tap.route'
import authRoutes from './auth.route'
import kiemTra1Tiet from './_kiem-tra-1-tiet.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/kiem-tra-1-tiet',
    route: kiemTra1Tiet,
  },
  {
    path: '/bai-tap-2',
    route: baiTap2Route,
  },
  {
    path: '/bai-tap-1',
    route: baiTap1Route,
  },
  {
    path: '/de-tai',
    route: deTaiRoute,
  },
  {
    path: '/giang-vien',
    route: giangVienRoute,
  },
  {
    path: '/huong-dan',
    route: huongDanRoute,
  },
  {
    path: '/khoa',
    route: khoaRoute,
  },
  {
    path: '/sinh-vien',
    route: sinhVienRoute,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
]
defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
