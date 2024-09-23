import { render, screen } from "@testing-library/react-native";
import { toBeOnTheScreen } from "@testing-library/jest-native";

import Calculator from "../Calculator";

expect.extend(toBeOnTheScreen);

describe("render correctly", () => {
  test("render clear button ", () => {
    render(<Calculator />);
    const button = screen.getByRole("text", { name: "AC" });
    expect(button).toBeTruthy();
  });

  test("render clear button ", () => {
    render(<Calculator />);
    const button = screen.getByRole("text", { name: "AC" });
    expect(button).toBeTruthy();
  });

  test("render operators", () => {
    render(<Calculator />);
    const plusButton = screen.getByRole("text", { name: "+" });
    expect(plusButton).toBeTruthy();
    const minusButton = screen.getByRole("text", { name: "-" });
    expect(minusButton).toBeTruthy();
  });
});


