import { Connection } from "typeorm";
import createConnection from "../../../../database/index";
import { v4 as uuid } from "uuid";
import { hash } from "bcryptjs";

let connection: Connection;
describe("Create User Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO users(id, name, email, password) VALUES ('${id}', 'Gian Carlos Ilchechen, 'admin@finapi.com.br, '${password}')`
    );
  });
});
