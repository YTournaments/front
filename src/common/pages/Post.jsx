import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

import { useAdminContext } from "../hooks/useAdminContext";
import { useAlertContext } from "../hooks/useAlertContext";
import useAxios from "../hooks/useAxios";
import axios from "../api/index";
const Post = () => {
  const [value, setValue] = useState("");
  let { setAlert } = useAlertContext();
  const { admin: isAdmin } = useAdminContext();
  const [response, data, error, loading, axiosFetch] = useAxios();

  const sendPost = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "post",
      url: "/posts",
      requestConfig: {
        data: {
          content: value,
        },
      },
    });
  };
  useEffect(() => {
    let errors = error?.response?.status;

    if (errors === 401 || errors === 403 || errors === 500) {
      setAlert("Une erreur est survenue", "error");
    }
    if (response?.status === 200) {
      setAlert("Votre article a bien été publié", "success");
      setValue("");
    }
  }, [error, response]);

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
          <Button variant="contained" color="primary" onClick={sendPost}>
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
