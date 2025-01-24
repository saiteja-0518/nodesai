const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers');


// router.get('/get-all-users', userController.getAllData); // Get all users
//  router.get('/get-user/by-id/', userController.GetUser); // Get user by ID
// router.get('/get-user/by-roll/', userController.getUserDataByRoll); // Get user by roll number

// //router.post('/user-add',uploadImage, userController.AddUser); // Add a new user


router.post('/signup_user/data',userController.AddUserData); // Add a new user
router.post('/login-user',userController.LoginUser)


// router.put('/update-user/', userController.updateUser); // Update user by ID

// router.delete('/delete-user',userController.deleteUser);//delete user by ID

module.exports = router;    