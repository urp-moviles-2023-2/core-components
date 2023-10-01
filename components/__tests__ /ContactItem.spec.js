import React from "react";
import { render, screen } from "@testing-library/react-native";
import ContactItem from "../ContactItem";

describe("ContactItem", () => {
  it("renders well", () => {
    const onDeleteContactHandler = jest.fn();
    const itemData = {
      item: {
        id: "1",
        text: "Hello, world!",
        contactLastName: "Hello, world!",
        mobilePhone: "Hello, world!",
      },
    };

    render(
      <ContactItem
        onDeleteContactHandler={onDeleteContactHandler}
        itemData={itemData}
      />,
    );
    expect(screen.getByText("Hello, world!")).toBeVisible();
  });
});
