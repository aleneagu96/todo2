import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  backgroundColor: "#212d40",
  borderRadius: 0,
  height: 55,
  width: 130,
  padding: 2,

});

function ButtonComponent({ onClick, label }) {
  return (
    <StyledButton 
    variant="contained" 
    size="large"
    onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default ButtonComponent;
