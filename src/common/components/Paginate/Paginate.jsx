import { Box } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Paginate = (props) => {
  const { page, maxPage, setPage } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        margin: "1rem",
        padding: "0rem 1rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          width: "50%",
          height: "100%",
          display: "flex",
        }}
      >
        {`Page ${page} sur ${maxPage}`}
      </Box>
      <Box
        sx={{
          border: "1px solid red",
          width: "50%",
          height: "100%",
          justifyContent: "end",

          display: "flex",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            color: "white",
          }}
        />
        <ArrowForwardIosIcon
          sx={{
            color: "white",
          }}
        />
      </Box>
    </Box>
  );
};

export default Paginate;
