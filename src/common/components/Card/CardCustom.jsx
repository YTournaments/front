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
        display: "flex",
        maxWidth: 345,
        minWidth: 150,
        minHeight: 200,
        maxHeight: 200,
        borderRadius: "10px",
        padding: "50px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image ? image : DefaultImage}
          alt="Image Game"
        />
      </CardActionArea>
    </Card>
  );
};

export default CardCustom;
