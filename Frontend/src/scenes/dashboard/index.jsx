import React from "react";
import Header from "../../components/common/Header";
import { Box, Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your data" />
      </Box>
    </Box>
  );
};

export default Dashboard;
