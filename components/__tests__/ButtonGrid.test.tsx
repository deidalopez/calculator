import { render, screen } from "@testing-library/react-native";
import { toBeOnTheScreen } from "@testing-library/jest-native";

import Calculator from "../Calculator";

expect.extend(toBeOnTheScreen);

test("render clear button ", () => {
  render(<Calculator />);
  // expect(screen.getByRole("header", { name: "0" })).toBeOnTheScreen();
  const button = screen.getByRole("text", { name: "AC" });
  expect(button).toBeTruthy();
  // expect(screen.getByRole("text", { name: "AC" })).toBeOnTheScreen();
});
