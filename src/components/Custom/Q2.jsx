import React, { useState } from "react";
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
import { useEffect } from "react";
import MKButton from "components/MKButton";

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

const MultiStepForm = ({userName,userEmail, selected}) => {
  const classes = useStyles();

  const steps = [
    "Where would you like to film?",
    "How many cameras do you need?",
    "Do you require B-roll footage?",
    "Do you require any extras?",
    "How many Talking Head videos do you want produced?"
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [filmLocation, setFilmLocation] = useState("");
  const [numberOfCameras, setNumberOfCameras] = useState("");
  const [bRollOptions, setBRollOptions] = useState({
    filmed: false,
    stockVideo: false,
    filmedAndStockVideo: false,
  });
  const [extras, setExtras] = useState({
    teleprompter: false,
    makeUpArtist: false,
    subtitles: false,
    animationGraphics: false,
  });
  const [numberOfTalkingHeadVideos, setNumberOfTalkingHeadVideos] = useState("");

 
  const [userSelections, setUserSelections] = useState({}); // Store user selections
  const [errorName, setErrorName] =  useState()
  const [errorEmail, setErrorEmail] =  useState()
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setTotalPrice(calculatedPrice);
  }, [filmLocation, numberOfCameras, bRollOptions, extras, numberOfTalkingHeadVideos]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const calculatePrice = () => {
    let price = 0;

    // Question 1: Where would you like to film?
    switch (filmLocation) {
      case "My site":
        price += 0;
        break;
      case "Your studio":
        price += 600;
        break;
      default:
        break;
    }

    // Question 2: How many cameras do you need?
    switch (numberOfCameras) {
      case "1 camera":
        price += 500;
        break;
      case "2 cameras":
        price += 900;
        break;
      case "Includes electronic slider":
        price += 1200;
        break;
      default:
        break;
    }

    // Question 3: Do you require B-roll footage?
    if (bRollOptions.filmed) {
      price += 500;
    }
    if (bRollOptions.stockVideo) {
      price += 400;
    }
    if (bRollOptions.filmedAndStockVideo) {
      price += 800;
    }

    // Question 4: Do you require any extras?
    if (extras.teleprompter) {
      price += 150;
    }
    if (extras.makeUpArtist) {
      price += 400;
    }
    if (extras.subtitles) {
      price += 200;
    }
    if (extras.animationGraphics) {
      price += 400;
    }

    // Question 5: How many Talking Head videos do you want produced?
    switch (numberOfTalkingHeadVideos) {
      case "1":
        price *= 1;
        break;
      case "2":
        price *= 2;
        break;
      case "3":
        price *= 3;
        break;
      default:
        break;
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
      return filmLocation;
    case 1:
      return numberOfCameras;
    case 2:
      return bRollOptions;
    case 3:
      return extras;
    case 4:
      return numberOfTalkingHeadVideos;
    default:
      return null;
  }
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const sendEmail = ()=>{

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
  if(validateEmail(userEmail) && errorName.length ===0) {
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
      selected:selected,
      Details:simplifiedObject
    }
    console.log(allDetails)
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
          <FormControl className={classes.formControl}>
            {/* Question 1: Where would you like to film? */}
            <RadioGroup value={filmLocation} onChange={(e) => setFilmLocation(e.target.value)}>
              <FormControlLabel value="My site" control={<Radio />} label="My site" />
              <FormControlLabel
                value="Your studio"
                control={<Radio />}
                label="Your studio"
              />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 1 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 2: How many cameras do you need? */}
            <RadioGroup
              value={numberOfCameras}
              onChange={(e) => setNumberOfCameras(e.target.value)}
            >
              <FormControlLabel value="1 camera" control={<Radio />} label="1 camera" />
              <FormControlLabel
                value="2 cameras"
                control={<Radio />}
                label="2 cameras"
              />
              <FormControlLabel
                value="Includes electronic slider"
                control={<Radio />}
                label="Includes electronic slider"
              />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 2 && (
          <FormGroup>
            {/* Question 3: Do you require B-roll footage? */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={bRollOptions.filmed}
                  onChange={(e) => setBRollOptions({ ...bRollOptions, filmed: e.target.checked })}
                />
              }
              label="Filmed"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={bRollOptions.stockVideo}
                  onChange={(e) =>
                    setBRollOptions({ ...bRollOptions, stockVideo: e.target.checked })
                  }
                />
              }
              label="Stock Video"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={bRollOptions.filmedAndStockVideo}
                  onChange={(e) =>
                    setBRollOptions({ ...bRollOptions, filmedAndStockVideo: e.target.checked })
                  }
                />
              }
              label="Filmed & Stock Video"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    !bRollOptions.filmed &&
                    !bRollOptions.stockVideo &&
                    !bRollOptions.filmedAndStockVideo
                  }
                  onChange={() =>
                    setBRollOptions({
                      filmed: false,
                      stockVideo: false,
                      filmedAndStockVideo: false,
                    })
                  }
                />
              }
              label="No"
              classes={{ label: classes.checkBoxLabel }}
            />
          </FormGroup>
        )}
        {activeStep === 3 && (
          <FormGroup>
            {/* Question 4: Do you require any extras? */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.teleprompter}
                  onChange={(e) => setExtras({ ...extras, teleprompter: e.target.checked })}
                />
              }
              label="Teleprompter"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.makeUpArtist}
                  onChange={(e) => setExtras({ ...extras, makeUpArtist: e.target.checked })}
                />
              }
              label="Make-Up Artist"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.subtitles}
                  onChange={(e) => setExtras({ ...extras, subtitles: e.target.checked })}
                />
              }
              label="Subtitles"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.animationGraphics}
                  onChange={(e) => setExtras({ ...extras, animationGraphics: e.target.checked })}
                />
              }
              label="Animation/Graphics"
              classes={{ label: classes.checkBoxLabel }}
            />
          </FormGroup>
        )}
        {activeStep === 4 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 5: How many Talking Head videos do you want produced? */}
            <RadioGroup
              value={numberOfTalkingHeadVideos}
              onChange={(e) => setNumberOfTalkingHeadVideos(e.target.value)}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="1"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
              />
            </RadioGroup>
          </FormControl>
        )}

        {activeStep === 5 && (
          <>
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
          {/* {activeStep === steps.length - 1 && (
            <Typography variant="h6" align="center" className={classes.totalLabel}>
              Total Price: £{totalPrice}
            </Typography>
          )} */}

          {/* <Typography variant="h6" align="center" className={classes.totalLabel}>
            Total Price: £{totalPrice}
          </Typography> */}
        </Box>
      </Box>
    </Container>
  );
};

export default MultiStepForm;
