// LoginModel.js
import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const LoginModel = mongoose.model('User', loginSchema);

export default LoginModel;