import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAxiosFetch } from "../hooks/useAxiosFetch";
const Post = () => {
  const [value, setValue] = useState("");

  const { data, error, loading, fetchData } = useAxiosFetch({
    method: "POST",
    url: "/posts",
    data: {
      content: value,
    },
  });
  const sendPost = () => {
    fetchData();
  };

  const Font = Quill.import("formats/font");
  Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucid,a",
  ];
  Quill.register(Font, true);

  return (
    <>

      <Typography variant="h3" component="h1" gutterBottom>
        Suivi de developpement creation de post
        je m'apelle toto
      </Typography>
      <ReactQuill theme="snow" value={value} onChange={setValue} formats={Font} />
      <Button variant="contained" color="primary" onClick={() => sendPost()}>
        Send
      </Button>
    </>
  );
};

export default Post;
