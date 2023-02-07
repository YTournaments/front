import { Box } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Paginate = (props) => {
  const { page, pages, setPage } = props;
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

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
          width: "50%",
          height: "100%",
          display: "flex",
        }}
      >
        {`Page ${page} sur ${pages}`}
      </Box>
      <Box
        sx={{
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
          onClick={handleNext}
        />
        <ArrowForwardIosIcon
          sx={{
            color: "white",
          }}
          onClick={handlePrev}
        />
      </Box>
    </Box>
  );
};

export default Paginate;
