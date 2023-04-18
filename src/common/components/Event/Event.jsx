import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "600px",
  height: "220px",

  background: "#242832",
  borderRadius: "37px",
}));

export default function Event() {
  return (
    <Box
      sx={{
        display: "flex",
        color: "white",
        textAlign: "center",
        margin: "10rem 0",
        
        height: "798px",
      }}
    >
      
      <Box
        sx={{
          // width: "1200px",
          background:
            "linear-gradient(359.73deg, #06135D 0.22%, rgba(0, 0, 0, 0.01) 108.99%)",
          borderRadius: "48px",
          margin: "0 50px 0 0 ",
        }}
      >

        
        <h2
          style={{
            color: "white",
            fontSize: "20px",
            margin: "0 auto",
            textAlign: "center",
            paddingTop: "400px",
          }}
        >
          YNOV CAMPUS SOPHIA vous présente
        </h2>

        <p
          style={{
            color: "white",
            fontSize: "16px",
            margin: "20px 50px",
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nunc nisl aliquam mauris, sit
          amet ultricies lorem nunc vel nisl. Nullam auctor, nisl eget ultricies
          tincidunt, nunc nisl aliquam mauris, sit amet ultricies lorem nunc vel
          nisl.
        </p>

        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
          src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.774395305.1675094926&semt=sph"
          alt=""
        />

        <Box>
        <Link to="/"
          style={{
            color: "white",
            fontSize: "16px",
            margin: "50px 50px 10px 0px",
            display:"flex",
            justifyContent:"end",
            textDecoration: "none",
          }}
        >
        Voir l'article</Link>
        </Box>
       
        
      </Box>

      <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          margin: "10px 0 0 0 ",
        }}

        //rowSpacing={1}
      >
        <Grid item xs={12}>
          {/* <Item> */}
          <Card
            sx={{
              display: "flex",
              width: "600px",
              height: "220px",
              borderRadius: "37px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "290px" }}
              image="data:image/jpeg;base64,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"
              alt=""
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link to="/"
                style={{textDecoration:"none", color:"white", cursor:"pointer"}}
                
                >
                <Typography
                  component="div"
                  variant="h5"
                  style={{ textAlign: "left", fontSize: "18px" }}
                >
                  YTOURNAMENT EN PLEIN ASSENSION ...
                </Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "13px",
                    marginTop: "10px",
                  }}
                >
                  Y Tournament is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has bee ...
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    
                  }}
                >
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginTop: "10px",
                    }}
                    src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.774395305.1675094926&semt=sph"
                    alt=""
                  />
                  <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}> 
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginTop: "10px",
                      
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      
                      marginLeft: "10px",

                    }}
                  >
                    Name2
                  </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
          {/* </Item> */}
        </Grid>
        <Grid item xs={12}>
          {/* <Item> */}
          <Card
            sx={{
              display: "flex",
              width: "600px",
              height: "220px",
              borderRadius: "37px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "290px" }}
              image="data:image/jpeg;base64,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"
              alt=""
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link to="/"
                style={{textDecoration:"none", color:"white", cursor:"pointer"}}
                
                >
                <Typography
                  component="div"
                  variant="h5"
                  style={{ textAlign: "left", fontSize: "18px" }}
                >
                  YTOURNAMENT EN PLEIN ASSENSION ...
                </Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "13px",
                    marginTop: "10px",
                  }}
                >
                  Y Tournament is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has bee ...
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    
                  }}
                >
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginTop: "10px",
                    }}
                    src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.774395305.1675094926&semt=sph"
                    alt=""
                  />
                  <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}> 
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginTop: "10px",
                      
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      
                      marginLeft: "10px",

                    }}
                  >
                    Name2
                  </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
          {/* </Item> */}
        </Grid><Grid item xs={12}>
          {/* <Item> */}
          <Card
            sx={{
              display: "flex",
              width: "600px",
              height: "220px",
              borderRadius: "37px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "290px" }}
              image="data:image/jpeg;base64,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"
              alt=""
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Link to="/"
                style={{textDecoration:"none", color:"white", cursor:"pointer"}}
                
                >
                <Typography
                  component="div"
                  variant="h5"
                  style={{ textAlign: "left", fontSize: "18px" }}
                >
                  YTOURNAMENT EN PLEIN ASSENSION ...
                </Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "13px",
                    marginTop: "10px",
                  }}
                >
                  Y Tournament is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has bee ...
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    
                  }}
                >
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginTop: "10px",
                    }}
                    src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.774395305.1675094926&semt=sph"
                    alt=""
                  />
                  <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}> 
                  <Typography
                    sx={{
                      fontSize: "13px",
                      marginTop: "10px",
                      
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      
                      marginLeft: "10px",

                    }}
                  >
                    Name2
                  </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
          {/* </Item> */}
        </Grid>

        {/* <Box
          sx={{
            width: "600px",
            height: "220px",
            margin: "60px",

            background: "#242832",
            borderRadius: "37px",
          }}
        >
          red
        </Box> */}

        {/* <Box
          sx={{
            width: "600px",
            height: "220px",
            margin: " 60px",
            background: "#242832",
            borderRadius: "37px",
          }}
        >
          red
        </Box>
        <Box
          sx={{
            width: "600px",
            height: "220px",
            margin: " 60px ",
            background: "#242832",
            borderRadius: "37px",
          }}
        >
          red
        </Box>*/}
      </Grid>
      </Box>
    </Box>
  );
}
