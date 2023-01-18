const User = require('../module/UserModel');
const Token = require('../module/TokenModel');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    const response = await user.save();
    console.log(response);

    const token = await new Token({
        userID: response._id,
        token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}user/${response._id}/verify/${token.token}`;
    console.log('this is url', url);
    await sendEmail(user.email,"Verify Email",url)
    res.send('email sent please verify');

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
    const user = await User.findOne({ email, password });

    if (!user) return res.status(200).json({ message: 'user not found' });

    if (!user.verified) return res.status(200).json({ message: "please verified your profile" });

    return res.status(200).json({ message: "user founded", user });


}


module.exports = {
    createUser,
    verifyUser,
    loginUser
}