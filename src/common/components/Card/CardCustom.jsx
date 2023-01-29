import React from "react";
import { Card, CardMedia, Container } from "@mui/material";
import DefaultImage from "@/assets/defaultImage.svg";
const CardCustom = ({ image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 345,
        minWidth: 150,
        minHeight: 200,
        maxHeight: 200,
        borderRadius: "20px",
        padding: "1rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={image ? image : DefaultImage}
          alt="Image Game"
        />
      </Container>
    </Card>
  );
};

export default CardCustom;
