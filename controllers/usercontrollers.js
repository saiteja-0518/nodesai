// const userData = require('../models/usermodels');

// const bcrypt =require("bcrypt");

// const AddUserData = async (req, res) => {
    
//     const { userFName, userLName, userRoll, userEMail, userMobile, userPassword } = req.body;
//    const hashedPassword = await bcrypt(userPassword, 12);
//     console.log(req.body);
//     if (!userFName || !userLName || !userRoll || !userEMail || !userMobile || !userPassword) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }
//     try {
//         const newUser = new userData({ userFName, userLName, userRoll, userEMail, userMobile, userPassword:hashedPassword 
//             });
//         await newUser.save();
//         res.status(201).json({ message: 'User added successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// //login page 

// const LoginUser = async (req, res) => {
//     const { userEMail, userPassword } = req.body;

//     // Check if all required fields are provided
//     if (!userEMail || !userPassword) {
//         return res.status(400).json({ error: 'Missing email or password' });
//     }
//     try {
//         // Find the user in the database using the email
//         const user = await userData.findOne({ userEMail });
//         // If user does not exist, return error
//         if (!user)
//             return res.status(404).json({ error: 'User not found' });
//         }
//         // Compare the provided password with the hashed password in the database
//         const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);

//         if (!isPasswordValid) {
//             return res.status(401).json({ error: 'Invalid email or password' });
//         }
//         // Login successful, respond accordingly
//         res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.userEMail } });
//     } catch (err) {
//         // Handle unexpected errors
//         res.status(500).json({ error: err.message });
//     }
// };


const userData = require('../models/usermodels');
const bcrypt = require("bcrypt");

const AddUserData = async (req, res) => {
    const { userFName, userLName, userRoll, userEMail, userMobile, userPassword } = req.body;
    console.log(req.body);

    if (!userFName || !userLName || !userRoll || !userEMail || !userMobile || !userPassword) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(userPassword, 12);
        const newUser = new userData({ userFName, userLName,userRoll,userEMail,userMobile,userPassword: hashedPassword,});
        await newUser.save();
        res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login function
const LoginUser = async (req, res) => {
    const { userEMail, userPassword } = req.body;
    console.log(req.body);
    if (!userEMail || !userPassword) {
        return res.status(400).json({ error: 'Missing email or password' });
    }
    try {
        const user = await userData.findOne({ userEMail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};






// //get the overall data-->find()
// const getAllData =async (req,res)=>{
//     try{
//         const result =await userData.find();
//         res.status(200).json(result);
//     }catch(err){
//         res.status(500).json({error:err.message});
//     }
// };


// // // get the single data item -->findOne()
// const getUserDataByRoll = async (req, res) => {
//     const userRoll = req.params.userRollNo;
//     try {
//         const result = await userData.findOne({ userRoll });
//         if (!result) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


// //get data by id --->findbyid()
// const GetUser = async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const result = await userData.findById(userId);
//         if (!result) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(result);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };




module.exports = {
   AddUserData,
   LoginUser,

    // getAllData,
    // getUserDataByRoll,
    // GetUser,
}


