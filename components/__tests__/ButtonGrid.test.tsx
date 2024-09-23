import { render, screen, userEvent } from "@testing-library/react-native";
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

describe("perform calculations", () => {
  test("perform addition calculation", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.press(screen.getByText("5"));
    await user.press(screen.getByText("+"));
    await user.press(screen.getByText("1"));
    await user.press(screen.getByText("0"));
    await user.press(screen.getByText("="));

    const result = await screen.findByRole("header");

    expect(result).toHaveTextContent("15");
  });

  test("Perform addition with a positive and a negative number", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.press(screen.getByText("5"));
    expect(await screen.findByRole("header")).toHaveTextContent("5");

    await user.press(screen.getByText("+"));
    expect(await screen.findByRole("header")).toHaveTextContent("5");

    await user.press(screen.getByText("8"));
    expect(await screen.findByRole("header")).toHaveTextContent("8");

    await user.press(screen.getByText("+/-"));
    expect(await screen.findByRole("header")).toHaveTextContent(/^-8$/);

    await user.press(screen.getByText("="));
    expect(await screen.findByRole("header")).toHaveTextContent("-3");
  });

  test("perform subtract calculation", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.press(screen.getByText("5"));
    await user.press(screen.getByText("-"));
    await user.press(screen.getByText("1"));
    await user.press(screen.getByText("="));

    const result = await screen.findByRole("header");
    expect(result).toHaveTextContent("4");
  });

  test("perform multiplication calculation", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.press(screen.getByText("5"));
    await user.press(screen.getByText("x"));
    await user.press(screen.getByText("3"));
    await user.press(screen.getByText("="));
    const result = await screen.findByRole("header");
    expect(result).toHaveTextContent(/^15$/);
  });

  test("perform harder multiplication calculation", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.press(screen.getByText("5"));
    await user.press(screen.getByText("2"));
    await user.press(screen.getByText("x"));
    await user.press(screen.getByText("1"));
    await user.press(screen.getByText("."));
    await user.press(screen.getByText("2"));
    await user.press(screen.getByText("="));
    const result = await screen.findByRole("header");
    expect(result).toHaveTextContent("62.4");
  });

});
