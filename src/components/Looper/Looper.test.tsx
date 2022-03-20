import { render, screen } from "@testing-library/react";
import Looper from ".";
import { getPadsFromUrls } from "../../store/helpers";
import { useLooperContext } from "../../store/LooperContext";
import userEvent from "@testing-library/user-event";

jest.mock("../../store/LooperContext", () => ({
  useLooperContext: jest.fn(),
}));

const useLooperContextMock = useLooperContext as jest.Mock;

const playAllMock = jest.fn();
const stopAllMock = jest.fn();
const playSingleMock = jest.fn();

describe("Looper test", () => {
  beforeEach(() => {
    useLooperContextMock.mockImplementation(() => ({
      pads: getPadsFromUrls([
        "./loop1.mp3",
        "./loop2.mp3",
        "./loop3.mpga",
        "./loop4.mpga",
        "./loop5.mp3",
        "./loop6.mp3",
        "./loop7.mp3",
        "./loop8.mp3",
        "./loop9.mp3",
      ]),
      playAll: playAllMock,
      stopAll: stopAllMock,
      playSingle: playSingleMock,
    }));
  });
  test("Looper - renders correctly", () => {
    const { container } = render(<Looper />);
    expect(container).toMatchSnapshot();
  });
  test("Looper - play all", () => {
    render(<Looper />);
    userEvent.click(screen.getByRole("button", { name: "Play All" }));
    expect(playAllMock).toBeCalledTimes(1);
  });
  test("Looper - stop all", () => {
    render(<Looper />);
    userEvent.click(screen.getByRole("button", { name: "Stop All" }));
    expect(stopAllMock).toBeCalledTimes(1);
  });
  test("Looper - play single", () => {
    render(<Looper />);
    userEvent.click(screen.getAllByLabelText("Pad")[0]);
    expect(playSingleMock).toBeCalledTimes(1);
  });
});
