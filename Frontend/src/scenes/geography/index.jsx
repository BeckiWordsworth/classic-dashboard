import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/common/Header";
import GeopgraphyChart from "../../components/common/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeopgraphyChart />
      </Box>
    </Box>
  );
};

export default Geography;