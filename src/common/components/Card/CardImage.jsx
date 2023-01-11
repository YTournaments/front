import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActionArea,
  Chip,
  Slider,
} from "@mui/material";
import { styled as styled } from "@mui/material/styles";
import CustomButton from "../Button/Button";
import DefaultImage from "../../../assets/defaultImage.png";
import { useNavigate } from "react-router-dom";
import { palette } from "@mui/system";
const StyledCard = styled(Card)(({ theme }) => ({
  "& MuiCard-root": {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));
const CustomizedSlider = styled(Slider)(({ theme }) => ({
  color: "#20b2aa",
  width: "80%",
  left: "8%",
  justifyContent: "center",
  "& .MuiSlider-rail": {
    height: "3px",
    borderRadius: "10px",
  },
  "& .MuiSlider-track": {
    height: "3px",
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
}));

const CardImage = (props) => {
  const { image, title, description, nbplayers } = props;
  const navigate = useNavigate();
  return (
    <StyledCard sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Chip
          label={title}
          color="primary"
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "1px",
          }}
        />
        <CardMedia
          component="img"
          src={image ? image : DefaultImage}
          width="307px"
          alt={title}
        />
      </Box>

      <CardContent>
        <Typography component="h3">{description}</Typography>
      </CardContent>
      <CustomizedSlider
        size="small"
        aria-label="Small"
        disabled
        defaultValue={nbplayers ? nbplayers : 10}
      />

      <CardActions>
        <Typography
          size="small"
          sx={{
            fontSize: "12px",
          }}
        >
          Inscription ouverte
        </Typography>
        <CustomButton
          variant="contained"
          color="purple"
          sx={{
            fontSize: "12px",
          }}
          onClick={() => navigate("/login")}
        >
          Participer
        </CustomButton>
      </CardActions>
    </StyledCard>
  );
};

export default CardImage;
