const {usuarios} = require("../models");
class usuarioController{
    async index(req,res){
        const usuario = await usuario.findAll();
        return res.status(200).json(usuario);
    }
    async store(req,res){
        const {nome,senha,email} = req.body;
        const createUsuario = await usuario.create({
            nome,
            senha,
            email
        });
        return res.status(200).json(createUsuario);
    }
    async update(req,res){
        const {id} = req.params;
        const {nome,senha,email} = req.body;
        await usuario.update({
            nome,
            senha,
            email
        },{where:{id}});
        return res.status(200).json({menssagem:"Usuário Atualizado!"})
    }
    async destroy(req,res){
        const {id} = req.params;
        await usuario.destroy({
            where:{id}
        });
        return res.status(200).json({menssagem:"Usuário Deletado!"})
    }
}module.exports = new usuarioController();