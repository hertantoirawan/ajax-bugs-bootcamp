export default function initFeaturesController(db) {
  const index = async (request, response) => {
    try {
      const features = await db.Feature.findAll();
      response.send({ features });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const { name } = request.body;

      const date = new Date();

      const feature = await db.Feature.create({
        name, created_at: date, updated_at: date,
      });
      response.send({ feature });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, create,
  };
}
