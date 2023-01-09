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
} from "@mui/material";
import { styled as styled } from "@mui/material/styles";
import CustomButton from "../Button/Button";

const StyledCard = styled(Card)(({ theme }) => ({
  "& MuiCard-root": {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));

const CardImage = (props) => {
  const { image, title, description } = props;
  return (
    <StyledCard
      sx={{
        maxWidth: 307,
        minWidth: 150,
        borderRadius: "10px",
      }}
    >
      <CardMedia component="img" src={image} alt={title} />
      <CardContent>
        <Typography component="h3">{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography size="small">Inscription ouverte</Typography>
        <CustomButton variant="contained" color="purple">
          Participer
        </CustomButton>
      </CardActions>
    </StyledCard>
  );
};

export default CardImage;
