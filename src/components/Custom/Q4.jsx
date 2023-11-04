import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MKButton from "components/MKButton";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  checkBoxLabel: {
    fontSize: "0.9rem",
  },
  backButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    color: "white",
  },
  calculateButton: {
    marginTop: theme.spacing(2),
    color: "white",
  },
  totalLabel: {
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
  },
}));

const VideoOptionsForm = ({selected}) => {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);

  const [videoLength, setVideoLength] = useState("Under 1 Minute");
  const [voiceOverArtist, setVoiceOverArtist] = useState();
  const [scriptWritten, setScriptWritten] = useState();
  const [descriptiveStoryboard, setDescriptiveStoryboard] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [userSelections, setUserSelections] = useState({}); // Store user selections
  const [errorName, setErrorName] =  useState()
  const [errorEmail, setErrorEmail] =  useState()
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const steps = [
    "How long do you want your video to be?",
    "Do you need a voice over artist",
    "Do you need a script written?",
    "Do you have a descriptive storyboard",
    "Details"
  ];

  const calculatePrice = () => {
    let price = 0;

    switch (videoLength) {
      case "Under 1 Minute":
        price += 1800;
        break;
      case "1-2 Minutes":
        price += 2500;
        break;
      case "2-3 Minutes":
        price += 3400;
        break;
      default:
        break;
    }

    if (voiceOverArtist === "Yes") {
      price += 400;
    }

    if (scriptWritten === "Yes") {
      price += 300;
    }

    if (descriptiveStoryboard === "No") {
      price += 500;
    }
    const newUserSelections = {
      ...userSelections, // Preserve existing selections
      [steps[activeStep]]: getUserSelectionForCurrentStep(), // Store current step's selection
    };
  
    setUserSelections(newUserSelections);
    return price;
  };

  const getUserSelectionForCurrentStep = () => {
    // Implement logic to get the user's selection for the current step
    switch (activeStep) {
      case 0:
        return videoLength;
      case 1:
        return voiceOverArtist;
      case 2:
        return scriptWritten;
      case 3:
        return descriptiveStoryboard;

      default:
        return null;
    }
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setTotalPrice(calculatedPrice);
  }, [videoLength, voiceOverArtist, scriptWritten, descriptiveStoryboard]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
      function simplifyObject(obj) {
        for (const key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            const trueKeys = Object.keys(obj[key]).filter(subKey => obj[key][subKey] === true);
            if (trueKeys.length > 0) {
              obj[key] = trueKeys;
            } else {
              delete obj[key];
            }
          }
        }
        return obj;
      }
      const simplifiedObject = simplifyObject(userSelections);
      let allDetails = {
        name:userName,
        email:userEmail,
        phone:phone,

        details:details,
        selected:selected,
        Details:simplifiedObject,
        totalPrice:totalPrice
      }
      const response = await axios.post('https://darkfalcon2023-c486af480b7a.herokuapp.com/send-email', allDetails);
      console.log(response.data.message)
      if(response.data.message === 'Email sent successfully') {
          //redirect to thank you page
         
      }
      console.log(JSON.stringify(allDetails))
      setErrorEmail('')
      setErrorName('')
    }

   



}
  return (
    <Container>
       {
        errorName && <Typography sx={{color:'red', fontSize:'1rem'}}>*{errorName}</Typography>
      }
       {
        errorEmail && <Typography sx={{color:'red',fontSize:'1rem'}}>*{errorEmail}</Typography>
      }
      <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>
        {steps[activeStep]}
      </Typography>
      <Box elevation={3} className={classes.formContainer}>
        {activeStep === 0 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 1: How long do you want your video to be? */}
            <RadioGroup value={videoLength} onChange={(e) => setVideoLength(e.target.value)}>
              <FormControlLabel
                value="Under 1 Minute"
                control={<Radio />}
                label="Under 1 Minute"
              />
              <FormControlLabel
                value="1-2 Minutes"
                control={<Radio />}
                label="1-2 Minutes"
              />
              <FormControlLabel
                value="2-3 Minutes"
                control={<Radio />}
                label="2-3 Minutes"
              />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 1 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 2: Do you need a voice over artist? */}
            <RadioGroup
              value={voiceOverArtist}
              onChange={(e) => setVoiceOverArtist(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 2 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 3: Do you need a script written? */}
            <RadioGroup value={scriptWritten} onChange={(e) => setScriptWritten(e.target.value)}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 3 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 4: Do you have a descriptive storyboard? */}
            <RadioGroup
              value={descriptiveStoryboard}
              onChange={(e) => setDescriptiveStoryboard(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 4 && (
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
            type="number"
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
        )}

        <Box mt={2}>
          <div>
            {activeStep > 0 && (
              <MKButton
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </MKButton>
            )}
            {activeStep === steps.length - 1 ? (
              <MKButton
                variant="contained"
                color="primary"
                onClick={sendEmail}
                className={classes.calculateButton}
              >
                Submit
              </MKButton>
            ) : (
              <MKButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.calculateButton}
              >
                Next
              </MKButton>
            )}
          </div>

          {/* <Typography variant="h6" align="center" className={classes.totalLabel}>
            Total Price: £{totalPrice}
          </Typography> */}
        </Box>
      </Box>
    </Container>
  );
};

export default VideoOptionsForm;
