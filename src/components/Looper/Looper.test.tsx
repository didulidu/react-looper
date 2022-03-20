import { render, screen } from "@testing-library/react";
import Looper from ".";
import { useLooperContext } from "../../store/LooperContext";
import userEvent from "@testing-library/user-event";
import { padsMock } from "../../mocks/padsMock";

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
      pads: padsMock,
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
