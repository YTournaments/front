import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { theme } from "../../theme";

export const CustomButton = styled(Button)((props) => {
  const { variant, color, size, text, onClick, ...others } = props;

  return {
    ...others,
    variant: variant || "contained",
    color: "white",
    backgroundColor: theme.palette[color].main,
    size: size || "large",
    text: text || "Button",
    borderRadius: "10px",
    onClick: onClick || (() => {}),
  };
});

export default CustomButton;
