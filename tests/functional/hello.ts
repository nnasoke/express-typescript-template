import App from "../../src/App";
import supertest from "supertest";
import * as http from "http";

import { describe, it } from "../helpers";
import { before, after } from "intern/lib/interfaces/tdd";

describe("Hello", () => {
  let server: http.Server;
  let client: supertest.SuperAgentTest;

  before(() => {
    server = App.listen();
    client = supertest.agent(server);
  });

  after(() => {
    server.close();
  });

  it("should show a welcome message", async (test) => {
    client.get("/api/hello").expect(200, "Hey");
  });
});
