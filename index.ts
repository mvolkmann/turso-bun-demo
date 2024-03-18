import { createClient } from "@libsql/client";

const client = createClient({
  url: Bun.env.TURSO_URL as string,
  authToken: Bun.env.TURSO_TOKEN,
});

const resultSet = await client.execute("select * from todos");
const { columns, rows } = resultSet;
for (const row of rows) {
  console.log("---");
  for (const column of columns) {
    console.log(column, "=", row[column]);
  }
}
