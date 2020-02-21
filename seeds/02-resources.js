exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Spaghetti",
      description: "If it ain't homemade I don't want it!"
    },
    {
      id: 2,
      name: "Coffee",
      description: "Caffeine > Taste"
    },
    {
      id: 3,
      name: "Disco Ball",
      description:
        "Picked it up at a yard sale and I have no idea what to do with it"
    }
  ]);
};
