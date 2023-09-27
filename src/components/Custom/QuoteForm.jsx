import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

import React from "react";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";

import { ArrowDropDown } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
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

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const sendContactEmail = ()=>{
    console.log("CONTACT FORM ONLY")
  }

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"}>
      <MKBox sx={{ display: "flex", background: "" }}>
        <FormControl
          className={classes.formControl}
          variant="outlined"
          fullWidth
          sx={{ color: "white" }}
        >
          <MKTypography style={{ color: "white", textAlign: "center" }}>
            Instant Quote Form
          </MKTypography>
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
            <MenuItem style={{ color: "primary" }} value={"Company Brand Video"}>
              Company Brand Video
            </MenuItem>
            <MenuItem value={"Customer Testimonial"}>Customer Testimonial</MenuItem>
            <MenuItem value={"Talking Heads"}>Talking Heads</MenuItem>
            <MenuItem value={"Site Video"}>Site Video</MenuItem>
            <MenuItem value={"2D Animation"}>2D Animation</MenuItem>
            <MenuItem value={"3D Animation"}>3D Animation</MenuItem>
          </Select>
        </FormControl>
      </MKBox>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"}>

        <MKBox sx={{ display: "flex", background: "", height: "auto", flexDirection:'row'}}>
        <Paper elevation={3} className={classes.formContainer} sx={{width:'40vw' }}>
      <>
            <MKInput 
            label="Your Name"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={handleUserNameChange}
              sx={{mb:'1rem'}} 
              size="large"
              />
            <MKInput
              label="Your Email"
              variant="outlined"
              fullWidth
              value={userEmail}
              sx={{mb:'1rem'}}

              onChange={handleUserEmailChange}
            />
            <MKInput fullWidth label="More Info" multiline rows={5} />
            {/* <MKButton
              variant="contained"
              color="primary"
              onClick={sendContactEmail}
            >
              Submit
            </MKButton> */}
          </>

          {(selectedOption === "Company Brand Video" || selectedOption === "Customer Testimonial" || selectedOption === "Site Video") && <Q1 userName={userName} userEmail={userEmail}  selected={selectedOption}/>}
          {selectedOption === "Talking Heads" && <Q2 userName={userName} userEmail={userEmail}  selected={selectedOption}/>}

          {selectedOption === "2D Animation" && <Q3 userName={userName} userEmail={userEmail}  selected={selectedOption}/>}

          {selectedOption === "3D Animation" && <Q4 userName={userName} userEmail={userEmail}  selected={selectedOption}/>}
          </Paper>
        </MKBox>
       
      </Grid>
    </Grid>
  );
};
