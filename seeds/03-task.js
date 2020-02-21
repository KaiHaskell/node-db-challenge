exports.seed = function(knex) {
  return knex("task").insert([
    {
      id: 1,
      project_id: 1,
      description: "Boil salted water",
      notes: "Besides this part I forgot how to make spaghetti "
    },
    {
      id: 2,
      project_id: 1,
      description: "MAKE DAT SAUCE",
      notes: "SAUCE"
    },
    {
      id: 3,
      project_id: 2,
      description: "Buy Facebook, Google, and Amazon",
      notes: "Should be easy enough"
    },
    {
      id: 4,
      project_id: 2,
      description: "Dominate",
      notes: "Still ironing this part out"
    },
    {
      id: 5,
      project_id: 3,
      description: "Graduate Lambda",
      notes: "Man I do not know as much as I wish I did"
    },
    {
      id: 6,
      project_id: 3,
      description: "Throw a dance party",
      notes: "Can't hurt"
    }
  ]);
};
