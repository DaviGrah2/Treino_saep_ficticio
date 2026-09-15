const { Router } = require("express");
const clienteController = require("./controller/clienteController");
const veiculoController = require("./controller/veiculoController");
const usuarioController = require("./controller/usuarioController");
const ordemServicoController = require("./controller/ordemServicoController");


const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});
// Rotas de Produtos
routes.get("/clientes", clienteController.index)
routes.post("/clientes", clienteController.store)
routes.put("/clientes/:id", clienteController.update)
routes.delete("/clientes/:id", clienteController.destroy)

routes.get("/veiculos", veiculoController.index)
routes.post("/veiculos", veiculoController.store)
routes.put("/veiculos/:id", veiculoController.update)
routes.delete("/veiculos/:id", veiculoController.destroy)

routes.get("/usuarios", usuarioController.index)
routes.post("/usuarios", usuarioController.store)
routes.put("/usuarios/:id", usuarioController.update)
routes.delete("/usuarios/:id", usuarioController.destroy)

routes.get("/ordemServicos", ordemServicoController.index)
routes.post("/ordemServicos", ordemServicoController.store)
routes.put("/ordemServicos/:id", ordemServicoController.update)
routes.delete("/ordemServicos/:id", ordemServicoController.destroy)



module.exports = routes;
