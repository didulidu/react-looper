import { FC, MouseEventHandler } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, color, ...rest }) => {
  return (
    <StyledButton
      type="button"
      role="button"
      backgroundColor={color}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
