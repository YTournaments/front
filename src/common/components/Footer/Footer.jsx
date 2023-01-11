import { Box } from '@mui/material'
import React from 'react'
import logo from "@/assets/android-chrome-192x192.png";
import insta from "@/assets/insta.svg";
import twiter from "@/assets/twitter.svg";
import fb from "@/assets/fb.svg";

export default function Footer() {
  return (

    <Box
        sx={{ 
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            background: "#050B29",
            px: "10%",
            margin:"100px 0 0 0",
            height:"311px",
            
        }}>
        <img
              src={logo}
              alt="logo ytournaments"
              width="186"
              height="168"
              
              onClick={() => navigate("/")}
            />
        <p>Mentions légales</p>
        <p>Politique et confidentialité</p>
        <Box sx={{ 
            display:"flex",
            gap: "20px",
            }}
        >
            <a href="https://www.instagram.com/ytournaments/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="logo instagram" width="30" height="30"/></a>
            <img src={twiter} alt="logo twitter" width="30" height="30" />
            <img src={fb} alt="logo facebook" width="30" height="30" />
        </Box>
        
    </Box>
   
  )
}
