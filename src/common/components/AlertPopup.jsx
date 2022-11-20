import { Alert, AlertTitle } from "@mui/material";
import { useAlertContext } from "../hooks/useAlertContext";

const AlertPopup = () => {
  const { text, type } = useAlertContext();

  if (text && type) {
    return (
      <Alert
        severity={type}
        sx={{
          position: "absolute",
          top: "20px",
          right: "0px",
          width: "auto",
          zIndex: 10,
        }}
      >
        <AlertTitle>{type}</AlertTitle>
        <strong>{text}</strong>
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
