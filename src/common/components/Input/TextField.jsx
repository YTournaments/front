import { styled as styled } from "@mui/material/styles";
import { TextField, InputAdornment } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme, textcolor }) => ({
  "& MuiTextField-root": {
    width: "100%",
  },
  "& .MuiFormLabel-root": {
    color: textcolor || "transparent",
  },
  "& .MuiInputBase-input": {
    webkitAutofill: {
      WebkitBoxShadow: "0 0 0 100px #fff inset",
      WebkitTextFillColor: "black",
    },
  },
  "& .MuiOutlinedInput-input": {
    webkitAutofill: {
      WebkitBoxShadow: "0 0 0 100px #fff inset",
      WebkitTextFillColor: "black",
    },
  },
  "& .MuiOutlinedInput": {
    borderWidth: "1px",
    borderColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
}));

export default function CustomTextField(props) {
  return (
    <StyledTextField
      id={`${props.label}`}
      style={{
        width: "100%",
        pointerEvents: "fill",
        borderRadius: "10px",

        ...props.style,
      }}
      sx={{
        "& legend": { display: props.textcolor ? "block" : "none" },
        "& fieldset": { top: props.textcolor ? "-5px" : "0" },
        ...props.sx,
      }}
      textcolor={props.textcolor}
      size={props.size || "small"}
      disabled={props.disabled}
      label={props.label}
      value={props.value}
      placeholder={props.placeholder}
      InputProps={{
        endAdornment: props.endAdornment && (
          <InputAdornment position="end">{props.endAdornment}</InputAdornment>
        ),

        startAdornment: props.startAdornment && (
          <InputAdornment position="start">
            {props.startAdornment}
          </InputAdornment>
        ),
        readOnly: props.readOnly || false,
      }}
      onChange={props.onChange}
      error={props.error}
      helperText={props.helperText}
      type={props.type}
    />
  );
}
