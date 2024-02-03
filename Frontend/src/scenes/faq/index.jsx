import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/common/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question also
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            More questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Oh and another thing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            One more thing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defualtExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            I might be annoying you now
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper arcu sed felis tempor, porta tempus diam
            ultrices. Sed sit amet pellentesque augue. Vivamus ut metus ornare, eleifend mi ut, tincidunt dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
