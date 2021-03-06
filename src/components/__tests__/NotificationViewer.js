import React from "react";
import renderer from "react-test-renderer";
import delay from "redux-saga";
import NotificationsViewer from "../NotificationsViewer";

jest.mock("../../services/NotificationsService");

const notificationsService = require("../../services/NotificationsService")
  .default;

describe("The Notification Viewer", () => {
  beforeAll(() => {
    notificationsService.__setCount(2);
  });

  it("Should display the correct number of notifications", async () => {
    const tree = renderer.create(<NotificationsViewer />);
    await delay();
    const instance = tree.root;
    const component = instance.findByProps({ className: "notifications" });
    const test = component.children[0];
    expect(test).toEqual("2 Notifications Awaiting");
  });
});
