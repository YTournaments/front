import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useAxiosFetch } from "../hooks/useAxiosFetch";
const DevBlog = () => {
  const { data, error, loading } = useAxiosFetch({
    method: "GET",
    url: "/posts",
  });

  return (
    <>
      {data != undefined ? (
        <Box>
          {data.posts.map((post) => (
            <>
              <Typography variant="h3" component="h1" gutterBottom>
                {post.createdAt}
              </Typography>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </>
          ))}
        </Box>
      ) : (
        <Typography variant="h3" component="h1" gutterBottom>
          Loading...
        </Typography>
      )}
    </>
  );
};

export default DevBlog;
