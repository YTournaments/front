import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAxiosPost } from "../hooks/useAxiosFetch";
import { useAdminContext } from "../hooks/useAdminContext";
import { useAlertContext } from "../hooks/useAlertContext";
const Post = () => {
  const [value, setValue] = useState("");
  let { setAlert } = useAlertContext();
  const { admin: isAdmin } = useAdminContext();
  const { data, error, loading, postData } = useAxiosPost({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
    method: "POST",
    url: "/posts",
    data: {
      title: "Suivi",
      content: value,
    },
  });

  const sendPost = async () => {
    await postData();
    let errors = error?.response?.status;
    console.log(error?.response?.status);
    if (errors === 401 || errors === 403 || errors === 500) {
      setAlert("Une erreur est survenue", "error");
    } else {
      setAlert("Votre post a bien été envoyé", "success");
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "formula", "code-block"],
      [
        { align: ["", "center", "right", "justify"] },
        { color: [] },
        { background: [] },
      ],
      ["clean"],
    ],
  };

  return (
    <>
      {isAdmin ? (
        <>
          <Typography variant="h3" component="h1" gutterBottom>
            Suivi de developpement creation de post
          </Typography>

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => sendPost()}
          >
            Send
          </Button>
        </>
      ) : (
        <Typography variant="h3" component="h1" gutterBottom>
          Vous n'avez pas les droits pour acceder a cette page
        </Typography>
      )}
    </>
  );
};

export default Post;
