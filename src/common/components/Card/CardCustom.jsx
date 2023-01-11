import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import DefaultImage from "../../../assets/defaultImage.png";
const CardCustom = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 150,
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image ? image : DefaultImage}
          sx={{
            borderRadius: "5px",
            height: "100%",
          }}
          alt="Image Game"
        />
      </CardActionArea>
    </Card>
  );
};

export default CardCustom;
