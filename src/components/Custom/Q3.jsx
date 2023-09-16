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

const MultiStepForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const steps = [
    "How long do you want your video to be?", // New question 1
    "Do you need a voice over artist?", // New question 2
    "Do you need a script written?", // New question 3
    "Do you have a descriptive storyboard?", // New question 4
    "Can you share any video links you like the style of",
    "Details",
  ];
  const [videoLength, setVideoLength] = useState("");
  const [needVoiceOverArtist, setNeedVoiceOverArtist] = useState("");
  const [needScriptWritten, setNeedScriptWritten] = useState("");
  const [haveStoryboard, setHaveStoryboard] = useState("");
  //   const [descriptiveStoryboard, setDescriptiveStoryboard] = useState('Yes: £0');
  const [videoStyle, setVideoStyle] = useState("");

  useEffect(() => {
    const calculatedPrice = calculatePrice();
    setTotalPrice(calculatedPrice);
  }, [videoLength, needVoiceOverArtist, needScriptWritten, haveStoryboard, videoStyle]);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const calculatePrice = () => {
    let price = 0;

    switch (videoLength) {
      case "Under 1 Minute: £800":
        price += 800;
        break;
      case "1-2 Minutes: £1300":
        price += 1300;
        break;
      case "2-3 Minutes: £1800":
        price += 1800;
        break;
      default:
        break;
    }

    if (needVoiceOverArtist === "Yes: £400") {
      price += 400;
    }

    if (needScriptWritten === "Yes: £300") {
      price += 300;
    }

    if (haveStoryboard === "No: £500") {
      price += 500;
    }

    return price;
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>
        {steps[activeStep]}
      </Typography>
      <Paper elevation={3} className={classes.formContainer}>
        {activeStep === 0 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 1: How long do you want your video to be? */}
            <RadioGroup value={videoLength} onChange={(e) => setVideoLength(e.target.value)}>
              <FormControlLabel
                value="Under 1 Minute: £800"
                control={<Radio />}
                label="Under 1 Minute: £800"
              />
              <FormControlLabel
                value="1-2 Minutes: £1300"
                control={<Radio />}
                label="1-2 Minutes: £1300"
              />
              <FormControlLabel
                value="2-3 Minutes: £1800"
                control={<Radio />}
                label="2-3 Minutes: £1800"
              />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 1 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 2: Do you need a voice over artist? */}
            <RadioGroup
              value={needVoiceOverArtist}
              onChange={(e) => setNeedVoiceOverArtist(e.target.value)}
            >
              <FormControlLabel value="Yes: £400" control={<Radio />} label="Yes: £400" />
              <FormControlLabel value="No: £0" control={<Radio />} label="No: £0" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 2 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 3: Do you need a script written? */}
            <RadioGroup
              value={needScriptWritten}
              onChange={(e) => setNeedScriptWritten(e.target.value)}
            >
              <FormControlLabel value="Yes: £300" control={<Radio />} label="Yes: £300" />
              <FormControlLabel value="No: £0" control={<Radio />} label="No: £0" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 3 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 4: Do you have a descriptive storyboard? */}
            <RadioGroup value={haveStoryboard} onChange={(e) => setHaveStoryboard(e.target.value)}>
              <FormControlLabel value="Yes: £0" control={<Radio />} label="Yes: £0" />
              <FormControlLabel value="No: £500" control={<Radio />} label="No: £500" />
            </RadioGroup>
          </FormControl>
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
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              value={userEmail}
              onChange={handleUserEmailChange}
            />
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => setTotalPrice(calculatePrice())}
                className={classes.calculateButton}
              >
                Calculate
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
          <Typography variant="h6" align="center" className={classes.totalLabel}>
            Total Price: £{totalPrice}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default MultiStepForm;
