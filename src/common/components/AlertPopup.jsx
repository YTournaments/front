import { Alert, AlertTitle } from "@mui/material";
import { useAlertContext } from "../hooks/useAlertContext";
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
            top: "20px",
            right: "20px",
            width: "auto",
            zIndex: 10,
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
