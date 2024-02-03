import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";

export const CardTitle = styled(Typography)(() => ({
  width: "68%",
  "&:before": {
    content: '""',
    height: "2px",
    width: "111px",
    background: "#787878", // You can add background color or other styles if needed
    display: "block",
    margin: "0 auto", // Center the pseudo-element
    marginBottom: "10px",
  },
}));
export const CardDesc = styled(Typography)(() => ({
  width: "68%",

  textAlign: "center",
  "&:after": {
    content: '""',
    height: "2px",
    width: "111px",
    background: "#787878", // You can add background color or other styles if needed
    display: "block",
    margin: "0 auto", // Center the pseudo-element
    marginTop: "10px",
  },
}));
