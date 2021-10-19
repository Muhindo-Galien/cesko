const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter your name"],
        maxlength:[30,"Name cannot exceed more that=n 30 characters"],
        minlength:[4,"Name should have more than 5 characters"]
    },

    password:{
        type:String,
        required:[true, "Please Enter your Password"],
        minlength:[8,"Password should more than 8 characters"],
        select: false
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});


// compare password

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
 