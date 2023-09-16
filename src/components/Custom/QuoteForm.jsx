import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import React from "react";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";

import { ArrowDropDown } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    padding: "1rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const QuoteForm = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"}>
      <Box sx={{ display: "flex", background: "" }}>
        <FormControl
          className={classes.formControl}
          variant="outlined"
          fullWidth
          sx={{ color: "white" }}
        >
          <Typography style={{ color: "white", textAlign: "center" }}>
            Instant Quote Form
          </Typography>
          {/* <InputLabel htmlFor="age">I am looking for</InputLabel> */}
          <Select
            value={selectedOption}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <ArrowDropDown />
              </InputAdornment>
            }
            defaultChecked={true}
            defaultValue={0}
            // label="Age"
            MenuProps={{
              PaperProps: {
                style: {
                  //   color: 'white', // Background color of the dropdown menu
                },
              },
            }}
            style={{ color: "blue", fontWeight: "bold", padding: "1rem", background: "white" }}
          >
            <MenuItem style={{ color: "primary" }} value={0}>
              Select here
            </MenuItem>
            <MenuItem style={{ color: "primary" }} value={"A"}>
              Company Brand Video
            </MenuItem>
            <MenuItem value={"B"}>Customer Testimonial</MenuItem>
            <MenuItem value={"C"}>Talking Heads</MenuItem>
            <MenuItem value={"D"}>Site Video</MenuItem>
            <MenuItem value={"E"}>2D Animation</MenuItem>
            <MenuItem value={"F"}>3D Animation</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"}>
        <Box sx={{ display: "flex", background: "", height: "auto" }}>
          {(selectedOption === "A" || selectedOption === "B" || selectedOption === "D") && <Q1 />}
          {selectedOption === "C" && <Q2 />}

          {selectedOption === "E" && <Q3 />}

          {selectedOption === "F" && <Q4 />}
        </Box>
      </Grid>
    </Grid>
  );
};
