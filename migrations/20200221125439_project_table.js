exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increment();
    tbl
      .string("name", 64)
      .unique()
      .notNullable();
    tbl.string("description", 256);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable("resources", tbl => {
    tbl.increment();
    tbl
      .string("name", 64)
      .unique()
      .notNullable();
    tbl.string("description", 256);
  });

  await knex.schema.createTable("task", tbl => {
    tbl.increment();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.string("description", 256).notNullable();
    tbl.string("notes", 256);
  });

  await knex.schema.createTable("project_resources", tbl => {
    tbl.primary(["project_id", "resources_id"]);
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("resources_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("task");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
