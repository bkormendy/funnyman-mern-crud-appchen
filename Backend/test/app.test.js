//app.test.js
import request from "supertest"
import { expect } from "chai";
import MessageApp from "../app.mjs";
describe("Hello World test", function(){
  it("first test", function(done) {
    const res = request(MessageApp)
    .get("/")
res.expect({val: "Hello World"})
    res.expect(200, done)
  })
})