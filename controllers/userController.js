const User = require("../models/userModel");


// Register user
exports.register = async(req,res)=>{
     const { name, password } = req.body;
    

  const user = await User.create({
    name,
    password
  });

    res.status(201).json({
        success:true,
        user,

    })
};


// Login User
exports.loginUser = async (req, res, next) => {
  const { name, password } = req.body;

  // checking if user has given password and name both

  if (!name || !password) {
        res.status(404).json(err);

  }
  const user = await User.findOne({ name }).select("+password");


//   const isPasswordMatched = await user.comparePassword(password);

  res.status(200).json(
    {success:true,  
    user}
  )
};
