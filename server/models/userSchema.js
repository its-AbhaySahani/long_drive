const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  user_id:{
    type:String,
    required:true,
    unique:true,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure unique emails for signup
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});


//storing message in db
userSchema.methods.addMessage = async function (user_id, name, email, password ){
  try {
      this.messages = this.messages.concat({user_id, name, email, password})
      await this.save();
      return this.messages;
  } catch (error) {
      console.log(error)
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
