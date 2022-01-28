import { response } from 'express';
import User from '../models/user'
import { comparePassword, hashPassword } from '../utils/authUtils'
import jwt from 'jsonwebtoken'
import AWS from 'aws-sdk'
import {nanoid} from 'nanoid'

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY_ID,
  region: process.env.AWS_REGION ,
  apiVersion: process.env.AWS_API_VERSION
}

const SES = new AWS.SES(awsConfig)

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body)
    // check if database has user with that email
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send('No User found')
    // check password
    const match = await comparePassword(password, user.password)
    if (!match) return res.status(400).send("Wrong password");
    // create signed jwt
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true, // only works on hhtps
    });

    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again")
  }
}

export const logout = async (req,res) => {
  try {
    res.clearCookie('token');
    return res.json({message : 'Logout success'})
  } catch (error) {
    console.log(error)
  }
}

export const currentUser = async (req,res) => {
  try {
    const user = await User.findById(req.user._id).select('-password').exec();
    console.log('Current user', user)
    return res.json({ok: true})
  } catch (error) {
    console.log('Error1',error)
  }
}

export const forgotPassword = async (req, res) => {
  // console.log('send test email')
  // res.json({hidden: true})
  const {email} = req.body;
  const shortCode = nanoid(6).toUpperCase();
  const user = User.findOneAndUpdate({email}, {passwordResetCode : shortCode})

  if(!user) return res.status(400).send('User not found');

  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses:[email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html>
          <h1>Reset password</h1>
          <p>User this code to reset your password</p>
          <h2 style="color:red;">${shortCode}</h2>
          <i>edemy.com</i>
        </html>
          `
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Reset Password",
      }
    }
  }
  const emailSent = SES.sendEmail(params).promise();
  
  emailSent.then((data) => {
    console.log(data),
    res.json({ok: true})
  }).catch(err => 
    console.log(err))
}

export const resetPassword = async (req,res) => {
  try {
    const {email, code, newPassword} = req.body;
    console.table({ email, code, newPassword });

    const hashedPassword = await hashPassword(newPassword);
    const user = User.findOneAndUpdate({
      email,
      passwordResetCode: code,
    },{
      password: hashedPassword,
      passwordResetCode: "",
    }).exec();
    res.json({ok: true})
  } catch (error) {
    return res.status(400).send("Error ! Try Again", error)
  }
}

export const becomeInstructor = (req,res) => {
  console.log(res.data)
}