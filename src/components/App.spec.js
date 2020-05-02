import delay from "redux-saga";

it("Async task", (done) => {
  setTimeout(done, 300);
});

it("Async task 2", () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 200);
  });
});

it("Async task 3", async () => {
  await delay(100);
});
