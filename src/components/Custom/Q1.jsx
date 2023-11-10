import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const MultiStepForm = ({ selected}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorName, setErrorName] =  useState()
  const [errorEmail, setErrorEmail] =  useState()
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);


  const steps = [
    "Do you require interviews to be filmed?",
    "Do you require B-roll footage?",
    "How long do you want your video to be?",
    "Do you need any of the extras?",
    "Can you share any video links you like the style of?",
    "Details"
  ];

  const [requireFilmed, setRequireFilmed] = useState("No");
  // const [bRollOptions, setBRollOptions] = useState({
  //   filmed: false,
  //   Stock Video: false,
  //   Filmed And Stock Video: false,
  // });

  const [bRollOptions, setBRollOptions] = useState("none");
  const [videoLength, setVideoLength] = useState("Under 1 Minute");
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
    console.log('useEffect',calculatedPrice, bRollOptions )
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
      price = 900;
      console.log("price", price);

    }

    if (bRollOptions === 'filmed') {
      price += 500;
      console.log("filmed", price);

    }
    if (bRollOptions === 'Stock Video') {
      price += 400;
      console.log("Stock Video", price);

    }
    if (bRollOptions === 'Filmed And Stock Video') {
      price += 800;
      console.log("Filmed And Stock Video", price);

    }

    switch (videoLength) {
      case "Under 1 Minute":
        price *= 1.2;
        console.log("price", price);

        break;
      case "1-2 Minutes":
        price *= 1.5;
        console.log("price", price);

        break;
      case "2-3 Minutes":
        console.log("BEFORE 2-3 Minutes", price);

        price = price * 2;
        console.log("AFTER 2-3 Minutes", price);

        break;
      default:
        break;
    }

    if (extras.shortVideoReels) {
      price += 800;
      console.log("price", price);

    }
    if (extras.voiceOverArtist) {
      price += 400;
      console.log("price", price);

    }
    if (extras.locationScout) {
      price += 300;
      console.log("price", price);

    }
    if (extras.teleprompter) {
      price += 150;
      console.log("price", price);

    }
    if (extras.droneOperator) {
      price += 800;
      console.log("price", price);

    }
    if (extras.makeUpArtist) {
      price += 400;

      console.log("price", price);

    }
    if (extras.subtitles) {
      price += 200;
      console.log("price", price);

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


  const sendEmail = async ()=>{

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
          selected:selected,
          details:details,
          Details:simplifiedObject,
          totalPrice:totalPrice
        }
        const response = await axios.post('https://darkfalcon2023-c486af480b7a.herokuapp.com/send-email', allDetails);

        // const response = await axios.post('http://localhost:3000/send-email', allDetails);
        // console.log('allDetails', allDetails)
        console.log(response)
          navigate('/thank-you-quote');
        if(response.data.message === 'Email sent successfully') {
          setSuccess(true)
        }
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
               <FormControl component="fieldset" className={classes.formControl}>
               <RadioGroup value={requireFilmed} onChange={(e) => setRequireFilmed(e.target.value)}>
                 <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                 <FormControlLabel value="No" control={<Radio />} label="No" />
               </RadioGroup>
             </FormControl>
        )}
        {activeStep === 1 && (
          // <FormGroup>
          //   <FormControlLabel
          //     control={
          //       <Checkbox
          //         checked={bRollOptions.filmed}
          //         onChange={(e) => setBRollOptions({ ...bRollOptions, filmed: e.target.checked })}
          //       />
          //     }
          //     label="Filmed"
          //     classes={{ label: classes.checkBoxLabel }}
          //   />
          //   <FormControlLabel
          //     control={
          //       <Checkbox
          //         checked={bRollOptions.Stock Video}
          //         onChange={(e) =>
          //           setBRollOptions({ ...bRollOptions, Stock Video: e.target.checked })
          //         }
          //       />
          //     }
          //     label="Stock Video"
          //     classes={{ label: classes.checkBoxLabel }}
          //   />
          //   <FormControlLabel
          //     control={
          //       <Checkbox
          //         checked={bRollOptions.Filmed And Stock Video}
          //         onChange={(e) =>
          //           setBRollOptions({ ...bRollOptions, Filmed And Stock Video: e.target.checked })
          //         }
          //       />
          //     }
          //     label="Filmed & Stock Video"
          //     classes={{ label: classes.checkBoxLabel }}
          //   />
          // </FormGroup>

              <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup value={bRollOptions} onChange={(e) => setBRollOptions(e.target.value)}>
              <FormControlLabel value="flimed" control={<Radio />} label="flimed" />
              <FormControlLabel value="Stock Video" control={<Radio />} label="Stock Video" />
              <FormControlLabel value="Filmed And Stock Video" control={<Radio />} label="Filmed And Stock Video" />
              <FormControlLabel value="none" control={<Radio />} label="none" />

            </RadioGroup>
          </FormControl>
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
              // <Button
              //   variant="contained"
              //   color="primary"
              //   onClick={() => setTotalPrice(calculatePrice())}
              //   className={classes.calculateButton}
              // >
              //   Calculate
              // </Button>
              <MKButton
              variant="contained"
              color="primary"
              // onClick={() => setTotalPrice(calculatePrice())}
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
