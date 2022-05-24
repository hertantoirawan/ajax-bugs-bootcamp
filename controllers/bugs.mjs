export default function initBugsController(db) {
  const index = async (request, response) => {
    try {
      const bugs = await db.Bug.findAll();
      response.send({ bugs });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const { problem, errorText, featureID } = request.body;

      const date = new Date();

      const bug = await db.Bug.create({
        problem, error_text: errorText, feature_id: featureID, created_at: date, updated_at: date,
      });
      response.send({ bug });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, create,
  };
}
