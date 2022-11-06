import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { theme } from "../../theme";

export const CustomButton = styled(Button)((props) => {
  const { variant, color, size, text, onClick, ...others } = props;

  return {
    ...others,
    variant: variant || "contained",
    color: color || "primary",
    size: size || "large",
    text: text || "Button",
    onClick: onClick || (() => {}),
  };
});

export default CustomButton;
