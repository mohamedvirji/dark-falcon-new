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
  const [activeStep, setActiveStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorName, setErrorName] =  useState()
  const [errorEmail, setErrorEmail] =  useState()

  const steps = [
    "Do you require interviews to be filmed?",
    "Do you require B-roll footage?",
    "How long do you want your video to be?",
    "Do you need any of the extras?",
    "Can you share any video links you like the style of?"
  ];

  const [requireFilmed, setRequireFilmed] = useState("No");
  const [bRollOptions, setBRollOptions] = useState({
    filmed: false,
    stockVideo: false,
    filmedAndStockVideo: false,
  });
  const [videoLength, setVideoLength] = useState("");
  const [extras, setExtras] = useState({
    shortVideoReels: false,
    voiceOverArtist: false,
    locationScout: false,
    teleprompter: false,
    droneOperator: false,
    makeUpArtist: false,
    subtitles: false,
  });
  const [videoStyle, setVideoStyle] = useState("");
;
  const [userSelections, setUserSelections] = useState({}); // Store user selections

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setTotalPrice(calculatedPrice);
  }, [requireFilmed, bRollOptions, videoLength, extras, videoStyle]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const calculatePrice = () => {
    let price = 0;

    if (requireFilmed === "Yes") {
      console.log("price", price);
      price = 900;
    }

    if (bRollOptions.filmed) {
      price += 500;
    }
    if (bRollOptions.stockVideo) {
      price += 400;
    }
    if (bRollOptions.filmedAndStockVideo) {
      price += 800;
    }

    switch (videoLength) {
      case "Under 1 Minute":
        price *= 1.2;
        break;
      case "1-2 Minutes":
        price *= 1.5;
        break;
      case "2-3 Minutes":
        price *= 2;
        break;
      default:
        break;
    }

    if (extras.shortVideoReels) {
      price += 800;
    }
    if (extras.voiceOverArtist) {
      price += 400;
    }
    if (extras.locationScout) {
      price += 300;
    }
    if (extras.teleprompter) {
      price += 150;
    }
    if (extras.droneOperator) {
      price += 800;
    }
    if (extras.makeUpArtist) {
      price += 400;
    }
    if (extras.subtitles) {
      price += 200;
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
        return requireFilmed;
      case 1:
        return bRollOptions;
      case 2:
        return videoLength;
      case 3:
        return extras;
      case 4:
        return videoStyle;
        
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
      <Box className={classes.formContainer}>
        {activeStep === 0 && (
          <FormControl className={classes.formControl}>
            {/* <Typography>Do you require interviews to be filmed?</Typography> */}
            {/* <InputLabel sx={{color:'white'}}>Do you require interviews to be filmed?</InputLabel> */}
            <Select
              value={requireFilmed}
              onChange={(e) => setRequireFilmed(e.target.value)}
              sx={{ padding: "1rem" }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        )}
        {activeStep === 1 && (
          <FormGroup>
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
          </FormGroup>
        )}
        {activeStep === 2 && (
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={videoLength} onChange={(e) => setVideoLength(e.target.value)}>
              <FormControlLabel value="Under 1 Minute" control={<Radio />} label="Under 1 Minute" />
              <FormControlLabel value="1-2 Minutes" control={<Radio />} label="1-2 Minutes" />
              <FormControlLabel value="2-3 Minutes" control={<Radio />} label="2-3 Minutes" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 3 && (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.shortVideoReels}
                  onChange={(e) => setExtras({ ...extras, shortVideoReels: e.target.checked })}
                />
              }
              label="3x Short Video Reels"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.voiceOverArtist}
                  onChange={(e) => setExtras({ ...extras, voiceOverArtist: e.target.checked })}
                />
              }
              label="Voice Over Artist"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.locationScout}
                  onChange={(e) => setExtras({ ...extras, locationScout: e.target.checked })}
                />
              }
              label="Location ScouT"
              classes={{ label: classes.checkBoxLabel }}
            />
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
                  checked={extras.droneOperator}
                  onChange={(e) => setExtras({ ...extras, droneOperator: e.target.checked })}
                />
              }
              label="Drone Operator"
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
          </FormGroup>
        )}
        {activeStep === 4 && (
          <TextField
            label="Can you share any video links you like the style of?"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={videoStyle}
            onChange={(e) => setVideoStyle(e.target.value)}
          />
        )}

        {activeStep === 5 && (
          <>
            <Typography variant="body1" align="center">
            {JSON.stringify(userSelections, null, 2)}
          </Typography>
          <h1>Total Price: £{totalPrice} </h1>
    
          </>
        )}
        <Box mt={2}>
          <div>
            {activeStep > 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
              // <Button
              //   variant="contained"
              //   color="primary"
              //   onClick={() => setTotalPrice(calculatePrice())}
              //   className={classes.calculateButton}
              // >
              //   Calculate
              // </Button>
              <Button
              variant="contained"
              color="primary"
              // onClick={() => setTotalPrice(calculatePrice())}
              onClick={sendEmail}
              className={classes.calculateButton}
            >
              Submit
            </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.calculateButton}
              >
                Next
              </Button>
            )}
          </div>
          {/* {activeStep === steps.length - 1 && (
            <Typography variant="h6" align="center" className={classes.totalLabel}>
              Total Price: £{totalPrice}
            </Typography>
          )} */}
{/* 
          <Typography variant="h6" align="center" className={classes.totalLabel}>
            Total Price: £{totalPrice}
          </Typography> */}
        </Box>
      </Box>
    </Container>
  );
};

export default MultiStepForm;
