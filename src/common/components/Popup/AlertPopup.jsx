import { Alert, AlertTitle } from "@mui/material";
import { useAlertContext } from "../../hooks/useAlertContext";
import Slide from "@mui/material/Slide";
const AlertPopup = () => {
  const { text, type } = useAlertContext();

  if (text && type) {
    return (
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Alert
          severity={type}
          sx={{
            position: "absolute",
            top: "70px",
            right: "20px",
            width: "auto",
            zIndex: 10,
            color: "white",
            backgroundColor: "#34353C",
          }}
        >
          <AlertTitle>{type}</AlertTitle>
          <strong>{text}</strong>
        </Alert>
      </Slide>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
