import express from 'express'
const router=express.Router()
import {addUser,getAllUser} from '../Controllers/userController.js'



router.route('/').post(addUser).get(getAllUser)



export default router