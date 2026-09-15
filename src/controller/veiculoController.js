const {veiculos} = require("../models");
class veiculoController{
    async index(req,res){
        const veiculo = await veiculo.findAll();
        return res.status(200).json(veiculo);
    }
    async store(req,res){
        const {placa,marca,ano} = req.body;
        const createVeiculo = await veiculo.create({
            placa,
            marca,
            ano
        });
        return res.status(200).json(createVeiculo);
    }
    async update(req,res){
        const {id} = req.params;
        const {placa,marca,ano} = req.body;
        await veiculo.update({
            placa,
            marca,
            ano
        },{where:{id}});
        return res.status(200).json({menssagem:"Veiculo Atualizado!"})
    }
    async destroy(req,res){
        const {id} = req.params;
        await veiculo.destroy({
            where:{id}
        });
        return res.status(200).json({menssagem:"Veiculo Deletado!"})
    }
}module.exports = new veiculoController();