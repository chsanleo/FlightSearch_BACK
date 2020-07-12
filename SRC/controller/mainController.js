const { User } = require('../models');

const MainController = {
    async login(req, res) {
        try {
            //tema de email/username
            const user = await User.findOne(
                {
                    where: { username: req.body.username }
                }
            );
            if (!await bycrypt.compare(req.body.password, user.password)) {
                throw new Error({ message: 'Wrong Credentials' });
            }

            const token = jwt.sign({ id: user.id }, properties.token_SECRETWORD, { expiresIn: properties.token_EXPIRES });

            await User.updateOne({
                token:token
            },{
                where: { id: user.id }
            });

            res.status(200).send({ user, token });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async getAllQuestions(req, res){
        try {
            const questions = await User.findAll({attributes:['questionSecret']

            });
            res.status(200).send(questions);
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }


    }

};

module.exports = MainController;