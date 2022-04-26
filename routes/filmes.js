import controller from "../controllers/filmes.js";

const nomeRota = 'filmes';

export default function (app,config) {

const path = config.get("server.path_root") + nomeRota

  app
    .route(path).get(controller.get);

  app
    .route(path).post(controller.post);

  app
    .route(path).put(controller.put);

  app
    .route(path).delete(controller.delete);

  console.log(`Rota [${nomeRota}] carregada...`);
};
