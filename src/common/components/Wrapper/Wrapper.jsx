import React from "react";
import { Box } from "@mui/system";
export const Wrapper = (props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};
