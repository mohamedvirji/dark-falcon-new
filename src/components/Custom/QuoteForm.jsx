import {
  // Box,
  FormControl,
  Grid,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  Menu,
  MenuItem,
  Paper,
  // Select,
  TextField,
  Typography,
  Button
} from "@mui/material";

import React, { useRef } from "react";

import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";

import { ArrowDropDown } from "@mui/icons-material";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import axios from "axios";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
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
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(0);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setSelectedOption(event.currentTarget)
  };

  const handleMenuItemClick = (value) => {
    console.log('3D Animation', value)
    setSelectedOption(value);
    setAnchorEl(null);
  };
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");

  const [errorName, setErrorName] =  useState()
  const [errorEmail, setErrorEmail] =  useState()
  const [errorPhone, setErrorPhone] =  useState()

  const selectRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAdornmentClick = () => {
    const select = document.getElementById('my-select');
    if (select) {
      select.click();
    }
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
    const sendEmail = async()=>{

    if(userName.length === 0) {
      setErrorName('Name is required')
    } 
    if(userName.length > 0) {
      setErrorName('')
    } 
     if(!validateEmail(userEmail)){
      setErrorEmail('Email Invalid')
    } 
    if(validateEmail(userEmail)){
      setErrorEmail('')
    }
    if(validateEmail(userEmail) && !errorName) {

      let allDetails = {
        name:userName,
        email:userEmail,
        phone:phone,
        Details:details
      }
      const response = await axios.post('https://darkfalcon2023-c486af480b7a.herokuapp.com/send-email-form', allDetails);
      console.log(response)
      navigate('/thank-you');
      // if(response.data.message === 'Email sent successfully') {
      //   console.log(response)
      //     //redirect to thank you page
      //     navigate('/thank-you');
      // }
      console.log(allDetails)
      setErrorEmail('')
      setErrorName('')
    }

   



}

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"} mb={10}>
      <MKBox sx={{ display: "flex", background: "" }}>
        
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
          <Button
        aria-controls="custom-select-menu"
        aria-haspopup="true"
        onClick={handleButtonClick}
        endIcon={<ArrowDropDown />}
        style={{color:'black', fontSize:'1.2rem',}}
        sx={{
          background: 'white',
          color: 'black',
          '&:hover': {
            background: 'lightgray', 
          },
        }}      >
        {selectedOption || 'Select here'}
      </Button>
             <Menu
        id="custom-select-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
            <MenuItem style={{ color: "primary" }} value={0}>
              Select here
            </MenuItem>
            <MenuItem  style={{ color: "primary" }} onClick={() => handleMenuItemClick('Company Brand Video')}>
              Company Brand Video
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Customer Testimonial')} value={"Customer Testimonial"}>Customer Testimonial</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Talking Heads')} value={"Talking Heads"}>Talking Heads</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Site Video')} value={"Site Video"}>Site Video</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('2D Animation')} value={"2D Animation"}>2D Animation</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('3D Animation')} value={"3D Animation"}>3D Animation</MenuItem>
            </Menu>
      
        </FormControl>
      </MKBox>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justifyContent={"center"}>

        <MKBox sx={{ display: "flex", background: "", height: "auto", flexDirection:'row'}}>
        <Paper elevation={3} className={classes.formContainer} sx={{width: isMobile ?  '90vw':'40vw' }}>
      <>
      {
        errorName && <Typography sx={{color:'red', fontSize:'1rem'}}>*{errorName}</Typography>
      }
       {
        errorEmail && <Typography sx={{color:'red',fontSize:'1rem'}}>*{errorEmail}</Typography>
      }


{

selectedOption === 0 &&
      <>
  
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={handleUserNameChange}
              sx={{mb:'1rem'}}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              value={userEmail}
              sx={{mb:'1rem'}}

              onChange={handleUserEmailChange}
            />

              <TextField
            label="Details"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            />
<TextField
          label="Phone"
            multiline
            rows={1}
            variant="outlined"
            fullWidth
            value={phone}
            sx={{mt:'1rem'}}
              onChange={(e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 11) {
      setPhone(numericValue);
    }
  }}
            />
                </>

}
                {
                  selectedOption === 0   && <MKButton
                  variant="contained"
                  color="primary"
                  onClick={sendEmail}
                  style={{marginTop:'1rem'}}
                 
                >
                  Submit
                </MKButton>
                }
          </>

           { selectedOption!== 0 &&
<>
          {(selectedOption === "Company Brand Video" || selectedOption === "Customer Testimonial" || selectedOption === "Site Video") && 
          <Q1   selected={selectedOption}/>}

          {selectedOption === "Talking Heads" && <Q2   selected={selectedOption}/>}

          {selectedOption === "2D Animation" && <Q3   selected={selectedOption}/>}

          {selectedOption === "3D Animation" && <Q4   selected={selectedOption}/>}
          </>

          }

          </Paper>
        </MKBox>
       
      </Grid>
    </Grid>
  );
};
