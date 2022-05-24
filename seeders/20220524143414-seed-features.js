module.exports = {
  up: async (queryInterface) => {
    const featuresList = [
      {
        name: 'Cool Feature',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Amazing Feature',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Incredible Feature',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const features = await queryInterface.bulkInsert(
      'features',
      featuresList,
      { returning: true },
    );

    queryInterface.bulkInsert('features', features);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
