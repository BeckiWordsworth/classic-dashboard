import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

import React from "react";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent={"space-between"}>
        {icon}
        <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <ProgressCircle progress={progress} />
      </Box>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography variant="h5" sx={{ color: colors.green[500] }}>
          {subtitle}
        </Typography>
        <Typography variant="h5" fontWeight="italic" sx={{ color: colors.greenAccent[600] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
