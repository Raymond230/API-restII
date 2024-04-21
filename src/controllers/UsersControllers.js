class UsersController{
    create(req,res){
         const { nome, email, password } = req.body;

         res.json({nome, email, password});
    }
}

module.exports = UsersController