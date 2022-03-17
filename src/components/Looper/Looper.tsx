import { FC, useCallback } from "react";
import { useLooperContext } from "../../store/LooperContext";
import Button from "../atoms/Button/Button";
import Pad from "../atoms/Pad/Pad";
import { StyledFooter, StyledGrid, buttonDimension } from "./styles";
import { ReactComponent as ButtonPlayIcon } from "../../assets/icons/button_play.svg";
import { ReactComponent as ButtonPauseIcon } from "../../assets/icons/button_pause.svg";

const Looper: FC = () => {
  const { pads, playSingle, playAll, stopAll } = useLooperContext();

  const handlePadPress = useCallback(
    (id: string) => {
      playSingle(id);
    },
    [playSingle]
  );

  return (
    <div style={{}}>
      <StyledGrid>
        {pads.map((pad) => {
          return <Pad key={pad.id} pad={pad} onPress={handlePadPress} />;
        })}
      </StyledGrid>
      <StyledFooter>
        <Button onClick={playAll} color="lightblue">
          <ButtonPlayIcon style={buttonDimension} />
        </Button>
        <Button onClick={stopAll} color="indianred">
          <ButtonPauseIcon style={buttonDimension} />
        </Button>
      </StyledFooter>
    </div>
  );
};

export default Looper;
