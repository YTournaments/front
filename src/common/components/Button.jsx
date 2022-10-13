import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ color }) => ({
  color: color === "primary" ? "#ae46d" : "#000",
}));
