"use client";
import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const FooterSection = styled(Stack)(({ theme }) => ({
  background: "#353535",
  minHeight: "18.75rem",
  color: "#fff",
  textAlign: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const FooterColumnTitle = styled(Typography)(() => ({
  color: "#fff",
  fontFamily: "inter",
  fontSize: "1.5rem",
  fontWeight: 500,
}));

export const FooterText = styled(Typography)(() => ({
  color: "#A7A7A7",
  textDecoration: "none",
  whiteSpace: "pre-wrap",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
}));
export const FooterTextLink = styled(FooterText)(() => ({
  fontWeight: 500,
  "&:hover": {
    color: "#fff",
  },
}));
export const FooterTextContact = styled(FooterText)(() => ({
  fontWeight: 500,
  "&:hover": {
    color: "#fff",
  },
}));
export default FooterSection;
