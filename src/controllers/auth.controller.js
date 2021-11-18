import createHttpError from 'http-errors'
import catchAsync from '../utils/catchAsync'
import sinhVienService from '../services/2-sinh-vien.service'
/**
 * @GET v1/
 * @access public
 */
const loginPage = catchAsync(async (req, res) => {
  res.render('main/form/form', {
    titlePage: 'Form',
  })
})

/**
 * @POST api/v1/sinhViens/
 * @access private
 */
const createSinhVien = catchAsync(async (req, res) => {
  const { hoTen, nu, hocBong } = req.body
  if (!hoTen || !nu || !hocBong) return res.redirect('/v1/auth')
  const sinhVien = await sinhVienService.createSinhVien({ hoTen, nu, hocBong })
  res.redirect('/v1/auth/sinh-vien')
})

/**
 * @GET v1/
 * @access private
 */
const login = catchAsync(async (req, res) => {
  const { email, password, nu, hocBong } = req.body
  if (!email || !password) return res.redirect('/v1/auth')
  const name = email.split('@')[0]
  // create a sinh vien
  const sinhVien = await sinhVienService.createSinhVien({
    hoTen: name,
    nu: !!nu,
    hocBong,
  })
  console.log({ sinhVien })
  const posts = [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam quod, quae id vero similique iste ut, animi, placeat praesentium distinctio dolorem sed expedita pariatur provident? Libero odit quia eligendi.',
      user: { id: 1, email, name },
      createAt: '1 giờ',
      numberLike: 10,
      postedBy: 1,
    },
    {
      user: { id: 1, email, name },
      createAt: '2 giờ',
      numberLike: 20,
      postedBy: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam quod, quae id vero similique iste ut, animi, placeat praesentium distinctio dolorem sed expedita pariatur provident? Libero odit quia eligendi.',
    },
    {
      user: { id: 2, email, name },
      createAt: '3 giờ',
      numberLike: 30,
      postedBy: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat totam quod, quae id vero similique iste ut, animi, placeat praesentium distinctio dolorem sed expedita pariatur provident? Libero odit quia eligendi.',
    },
  ]
  res.render('main/home/home', {
    titlePage: 'Home',
    posts,
  })
})

/**
 * @GET api/v1/sinhViens
 * @access public
 */
const getSinhViens = catchAsync(async (req, res) => {
  const result = await sinhVienService.getSinhViens()
  console.log(result)
  res.render('main/search/search', {
    titlePage: 'Danh sach sinh vien',
    sinhViens: result,
  })
})

/**
 * @GET api/v1/sinhViens/:sinhVienId
 * @access public
 */
const getUpdatePage = catchAsync(async (req, res) => {
  const { id } = req.params
  const sinhVien = await sinhVienService.getSinhVienById({ _id: id })
  if (!sinhVien) {
    throw createHttpError.NotFound()
  }
  res.render('main/form/updateInfo', {
    titlePage: 'Update Info',
    sinhVien,
  })
})

/**
 * @PATCH api/v1/sinhViens/:sinhVienId
 * @access private
 */
const updateSinhVien = catchAsync(async (req, res) => {
  const sinhVien = await sinhVienService.updateSinhVienById(
    req.params.id,
    req.body
  )
  return res.redirect('/v1/auth/sinh-vien')
})

/**
 * @DELETE api/v1/sinhViens/:sinhVienId
 * @access private
 */
const deleteSinhVien = catchAsync(async (req, res) => {
  await sinhVienService.deleteSinhVienById(req.params.id)
  return res.redirect('/v1/auth/sinh-vien')
})

export default {
  loginPage,
  login,
  getSinhViens,
  createSinhVien,
  deleteSinhVien,
  getUpdatePage,
  updateSinhVien,
}
