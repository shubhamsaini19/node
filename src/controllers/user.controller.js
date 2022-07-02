const User = require('../schema/user.schema');

const Post = require('../schema/post.schema')

module.exports.getUsersWithPostCount = async (req, res) => {
    try {
        const users = await await User.find()

        // const posts = await Post.find();

        // const data = users.map((user)=>{
        //     return user.posts =  Post.count( { id : user._id} )
        // })

        console.log("users",users)
        // console.log("users",posts)

        res.status(200).json({
            message: 'Implement this API',
            users
        })
    } catch (error) {
        res.send({error: error.message});
    }
}