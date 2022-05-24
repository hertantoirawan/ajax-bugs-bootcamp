import db from './models/index.mjs';
import initBugsController from './controllers/bugs.mjs';

export default function bindRoutes(app) {
  const BugsController = initBugsController(db);
  app.get('/', (req, res) => {
    res.render('root');
  });
  app.post('/bugs', BugsController.create);
}
