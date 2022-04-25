import controller from "../controllers/bandas-rock.js";

const nomeRota = 'bandas';

export default function (app,config) {
  const path = config.get("server.path_root") + nomeRota

  app
    .route(path).get(controller.showList);

  app
    .route(path).post(controller.add);

  app
    .route(path).put(controller.update);

  app
    .route(path).delete(controller.remove);

  console.log(`Rota [${nomeRota}] carregada...`);
};
