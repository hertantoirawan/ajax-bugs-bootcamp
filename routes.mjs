import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';
import initFeaturesController from './controllers/features.mjs';

export default function bindRoutes(app) {
  const BugsController = initBugsController(db);
  app.get('/', (req, res) => {
    res.render('root');
  });
  app.get('/bugs', BugsController.index);
  app.post('/bugs', BugsController.create);

  const FeaturesController = initFeaturesController(db);
  app.get('/features', FeaturesController.index);
}
