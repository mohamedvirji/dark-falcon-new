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

const VideoOptionsForm = () => {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);

  const [videoLength, setVideoLength] = useState("Under 1 Minute: £1800");
  const [voiceOverArtist, setVoiceOverArtist] = useState("No: £0");
  const [scriptWritten, setScriptWritten] = useState("No: £0");
  const [descriptiveStoryboard, setDescriptiveStoryboard] = useState("Yes: £0");
  const [activeStep, setActiveStep] = useState(0);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

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
    "Details",
  ];

  const calculatePrice = () => {
    let price = 0;

    switch (videoLength) {
      case "Under 1 Minute: £1800":
        price += 1800;
        break;
      case "1-2 Minutes: £2500":
        price += 2500;
        break;
      case "2-3 Minutes: £3400":
        price += 3400;
        break;
      default:
        break;
    }

    if (voiceOverArtist === "Yes: £400") {
      price += 400;
    }

    if (scriptWritten === "Yes: £300") {
      price += 300;
    }

    if (descriptiveStoryboard === "No: £500") {
      price += 500;
    }

    return price;
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
                value="Under 1 Minute: £1800"
                control={<Radio />}
                label="Under 1 Minute: £1800"
              />
              <FormControlLabel
                value="1-2 Minutes: £2500"
                control={<Radio />}
                label="1-2 Minutes: £2500"
              />
              <FormControlLabel
                value="2-3 Minutes: £3400"
                control={<Radio />}
                label="2-3 Minutes: £3400"
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
              <FormControlLabel value="Yes: £400" control={<Radio />} label="Yes: £400" />
              <FormControlLabel value="No: £0" control={<Radio />} label="No: £0" />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 2 && (
          <FormControl component="fieldset" className={classes.formControl}>
            {/* Question 3: Do you need a script written? */}
            <RadioGroup value={scriptWritten} onChange={(e) => setScriptWritten(e.target.value)}>
              <FormControlLabel value="Yes: £300" control={<Radio />} label="Yes: £300" />
              <FormControlLabel value="No: £0" control={<Radio />} label="No: £0" />
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
              <FormControlLabel value="Yes: £0" control={<Radio />} label="Yes: £0" />
              <FormControlLabel value="No: £500" control={<Radio />} label="No: £500" />
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

          <Typography variant="h6" align="center" className={classes.totalLabel}>
            Total Price: £{totalPrice}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default VideoOptionsForm;
