import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pad from "./Pad";

describe("Pad test", () => {
  test("Looper renders correctly", () => {
    const { container } = render(
      <Pad
        onPress={jest.fn()}
        pad={{
          id: "1",
          isPlaying: false,
          active: false,
          audio: new Audio("./loop1.mp3"),
        }}
      />
    );
    expect(screen.getByLabelText("Pad")).toHaveStyle({
      "background-color": "lightgreen",
    });
    expect(container).toMatchSnapshot();
  });
  test("Pad click", () => {
    const onPressMock = jest.fn();
    render(
      <Pad
        onPress={onPressMock}
        pad={{
          id: "1",
          isPlaying: false,
          active: false,
          audio: new Audio("./loop1.mp3"),
        }}
      />
    );
    userEvent.click(screen.getByLabelText("Pad"));
    expect(onPressMock).toBeCalledTimes(1);
  });
  test("Pad active", () => {
    const { container } = render(
      <Pad
        onPress={jest.fn()}
        pad={{
          id: "1",
          isPlaying: false,
          active: true,
          audio: new Audio("./loop1.mp3"),
        }}
      />
    );
    expect(screen.getByLabelText("Pad")).toHaveStyle({
      "background-color": "lightblue",
    });
    expect(container).toMatchSnapshot();
  });

  test("Pad playing", () => {
    const { container } = render(
      <Pad
        onPress={jest.fn()}
        pad={{
          id: "1",
          isPlaying: true,
          active: true,
          audio: new Audio("./loop1.mp3"),
        }}
      />
    );
    expect(screen.getByLabelText("Pad")).toHaveStyle({
      "background-color": "salmon",
    });
    expect(container).toMatchSnapshot();
  });
});
