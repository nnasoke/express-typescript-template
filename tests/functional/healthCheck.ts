import App from "../../src/App";
import supertest from "supertest";

import { describe, it } from "../helpers";

describe("healthCheck", () => {
  const client = supertest(App);

  it("should show a ok text", async (test) => {
    client
      .get("/health-check")
      .expect(200, "Ok")
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
