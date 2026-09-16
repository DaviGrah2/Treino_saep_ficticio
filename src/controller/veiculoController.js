const {veiculos} = require("../models");
class veiculoController{
    async index(req,res){
        const veiculo = await veiculos.findAll();
        return res.status(200).json(veiculo);
    }
    async store(req,res){
        const {placa,marca,ano} = req.body;
        const createVeiculo = await veiculos.create({
            placa,
            marca,  
            ano
        });
        return res.status(200).json(createVeiculo);
    }
    async update(req,res){
        const {id} = req.params;
        const {placa,marca,ano} = req.body;
        await veiculos.update({
            placa,
            marca,
            ano
        },{where:{id}});
        return res.status(200).json({menssagem:"Veiculo Atualizado!"})
    }
    async destroy(req,res){
        const {id} = req.params;
        await veiculos.destroy({
            where:{id}
        });
        return res.status(200).json({menssagem:"Veiculo Deletado!"})
    }
}module.exports = new veiculoController();