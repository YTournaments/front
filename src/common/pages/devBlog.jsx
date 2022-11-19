import React, { useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";
import { useAxiosFetch } from "../hooks/useAxiosFetch";
const DevBlog = () => {
  const { data, error, loading } = useAxiosFetch({
    headers: {"Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${localStorage.getItem("user")}` },
    method: "GET",
    url: "/posts",

  });
  return (
    <>
    

      <Typography variant="h3" component="h1" sx={{
        textAlign: "center",
      }}>
        Suivi de developpement
      </Typography>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <>
          {data.data.map((post) => (
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


           }}>
            
            
            <Typography variant="h4" sx={{
              fontWeight: "bold",
              color: "secondary.main",
              textAlign: "center",
              margin: "1rem",
 
            }}>
              {post.created_at.slice(0, 10).split("-").reverse().join("/")}
            </Typography>
            <Box sx={{
             
            }}
            dangerouslySetInnerHTML={{ __html: post.content }} />
           
            </Card>
          ))}
        </>
      ) }
    </>
  );
};

export default DevBlog;
