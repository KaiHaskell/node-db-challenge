exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "Cook Spaghetti",
      description: "Mama mia!",
      completed: true
    },
    {
      id: 2,
      name: "World Domination",
      description: "It's bound to happen one day",
      completed: false
    },
    {
      id: 3,
      name: "Get a job",
      description: "I hate being broke 😔",
      completed: false
    }
  ]);
};
