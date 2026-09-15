const {clientes} = require("../models");
class clienteController{
    async index(req,res){
        const cliente = await cliente.findAll();
        return res.status(200).json(cliente);
    }
    async store(req,res){
        const {nome,telefone,email} = req.body;
        const createCliente = await cliente.create({
            nome,
            telefone,
            email
        });
        return res.status(200).json(createCliente);
    }
    async update(req,res){
        const {id} = req.params;
        const {nome,telefone,email} = req.body;
        await cliente.update({
            nome,
            telefone,
            email
        },{where:{id}});
        return res.status(200).json({menssagem:"Cliente Atualizado!"})
    }
    async destroy(req,res){
        const {id} = req.params;
        await cliente.destroy({
            where:{id}
        });
        return res.status(200).json({menssagem:"Cliente Deletado!"})
    }
}module.exports = new clienteController();