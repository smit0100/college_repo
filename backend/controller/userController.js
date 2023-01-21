const User = require('../module/UserModel');
const Token = require('../module/TokenModel');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
require('dotenv').config()


const createUser = async (req, res, next) => {
    const { name, email, number,password } = req.body;
    
    
    // const userExist = await User.findOne({ email });

    // if (userExist) return res.status(200).json({ message: 'usera already exist' });
    // const saltGen = await bcrypt.genSalt(10);
    // console.log(saltGen);
    // res.send(saltGen)
    // const encryptedPass = await bcrypt.hash(pass,salt)
    const encryptedPass = await bcrypt.hash(password, 10);
    console.log('this is encrypted');
    console.log(encryptedPass);
    const user = await new User({ name, email, number, password: encryptedPass }).save();

    const token = await new Token({
        userID: user._id,
        token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
    console.log('this is url', url);
    await sendEmail(user.email,"Verify Email",url)

    res.send('hello')


    // const cryptedPass = await bcrypt.hash(pass, 10, async (err, hash) => {
    //     if (err) {
    //         console.log('this is error');
    //         console.log(err);

    //         res.send(err)
    //     }
    //     console.log(hash);
    // const user =  new User({ name, email, number, password:pass });
    // const response = await user.save();
    // console.log(response);

   

    
    // });
   



   

}


const verifyUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: 'invalid link' });

        const token = await Token.findOne({
            userID: user._id,
            token:req.params.token
        })
        
        if (!token) return res.status(400).json({ message: "invalid link" });

        await User.updateOne({ _id: user._id },{ verified: true });
        await token.remove();

        res.status(200).send({ message: "email verified" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message:"internal server error"
        })
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(200).json({ message: 'user not found' });
    console.log(password);
    console.log(user.password);
    const pass = await bcrypt.compareSync(password, user.password);

    if (pass) {
        return res.status(200).json({ message: "user founded", user });
    }

    return res.status(200).json({ message: "please verified your profile" });



}


module.exports = {
    createUser,
    verifyUser,
    loginUser
}