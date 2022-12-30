import React, { useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";

import useAxios from "@/common/hooks/useAxios";
import axios from "@/common/api/index";

const DevBlog = () => {
  const [response, data, error, loading, axiosFetch] = useAxios();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      method: "get",
      url: "api/v1/posts",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ mt: 1, height: "100vh" }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
        }}
      >
        Suivi de developpement
      </Typography>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}

      {!loading && !error && (
        <>
          {data?.docs?.map((post) => (
            <Card
              key={post._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                margin: "1rem",
                borderRadius: "1rem",
                boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "secondary.main",
                  textAlign: "center",
                  margin: "1rem",
                }}
              >
                {post.createdAt && post.createdAt.split("T")[0]}
              </Typography>
              <Box sx={{}} dangerouslySetInnerHTML={{ __html: post.content }} />
            </Card>
          ))}
        </>
      )}
    </Box>
  );
};

export default DevBlog;
