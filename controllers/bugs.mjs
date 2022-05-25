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
      const {
        problem, errorText, commit, featureID,
      } = request.body;

      const date = new Date();

      const bug = await db.Bug.create({
        // eslint-disable-next-line max-len
        problem, error_text: errorText, commit, feature_id: featureID, created_at: date, updated_at: date,
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
