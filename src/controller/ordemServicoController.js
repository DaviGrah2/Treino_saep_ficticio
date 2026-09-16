const {ordemServicos} = require("../models");
class ordemServicoController{
    async index(req,res){
        const ordemServico = await ordemServicos.findAll();
        return res.status(200).json(ordemServico);
    }
    async store(req,res){
        const {data_pedido,data_entrega} = req.body;
        const createOrdemServico = await ordemServicos.create({
            data_pedido,
            data_entrega
        });
        return res.status(200).json(createOrdemServico);
    }
    async update(req,res){
        const {id} = req.params;
        const {data_pedido,data_entrega} = req.body;
        await ordemServicos.update({
            data_pedido,
            data_entrega
        },{where:{id}});
        return res.status(200).json({menssagem:"Ordem de Serviço Atualizada!"})
    }
    async destroy(req,res){
        const {id} = req.params;
        await ordemServicos.destroy({
            where:{id}
        });
        return res.status(200).json({menssagem:"Ordem de Serviço Deletada!"})
    }
}module.exports = new ordemServicoController();