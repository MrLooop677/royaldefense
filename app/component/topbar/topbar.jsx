import React from "react";
import { Stack, Typography, Box, Container } from "@mui/material";

const TopbarComp = () => {
  return (
    <Box sx={{ py: 1, borderBottom: "1px solid #b2b2b2", mb: 1 }}>
      <Stack justifyContent="end" alignItems="center" direction="row">
        <Typography color="initial" sx={{ mr: 3 }}>
          Country : <span style={{ color: "#a29d9d" }}>Egypt</span>
        </Typography>
        <Typography color="initial" sx={{ mr: 1 }}>
          Language : <span style={{ color: "#a29d9d" }}> Arabic</span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default TopbarComp;
