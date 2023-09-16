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

  const steps = [
    "Where would you like to film?",
    "How many cameras do you need?",
    "Do you require B-roll footage?",
    "Do you require any extras?",
    "How many Talking Head videos do you want produced?",
    "Details",
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

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

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
      case "My site: £0":
        price += 0;
        break;
      case "Your studio: £600":
        price += 600;
        break;
      default:
        break;
    }

    // Question 2: How many cameras do you need?
    switch (numberOfCameras) {
      case "1 camera: £500":
        price += 500;
        break;
      case "2 cameras: £900":
        price += 900;
        break;
      case "Includes electronic slider: £1,200":
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

    return price;
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>
        {steps[activeStep]}
      </Typography>
      <Paper elevation={3} className={classes.formContainer}>
        {activeStep === 0 && (
          <FormControl className={classes.formControl}>
            {/* Question 1: Where would you like to film? */}
            <RadioGroup value={filmLocation} onChange={(e) => setFilmLocation(e.target.value)}>
              <FormControlLabel value="My site: £0" control={<Radio />} label="My site: £0" />
              <FormControlLabel
                value="Your studio: £600"
                control={<Radio />}
                label="Your studio: £600"
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
              <FormControlLabel value="1 camera: £500" control={<Radio />} label="1 camera: £500" />
              <FormControlLabel
                value="2 cameras: £900"
                control={<Radio />}
                label="2 cameras: £900"
              />
              <FormControlLabel
                value="Includes electronic slider: £1,200"
                control={<Radio />}
                label="Includes electronic slider: £1,200"
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
              label="Filmed: £500"
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
              label="Stock Video: £400"
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
              label="Filmed & Stock Video: £800"
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
              label="No: £0"
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
              label="Teleprompter: £150"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.makeUpArtist}
                  onChange={(e) => setExtras({ ...extras, makeUpArtist: e.target.checked })}
                />
              }
              label="Make-Up Artist: £400"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.subtitles}
                  onChange={(e) => setExtras({ ...extras, subtitles: e.target.checked })}
                />
              }
              label="Subtitles: £200"
              classes={{ label: classes.checkBoxLabel }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={extras.animationGraphics}
                  onChange={(e) => setExtras({ ...extras, animationGraphics: e.target.checked })}
                />
              }
              label="Animation/Graphics: £400"
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
                label="1 (Note - Previous calculation x1)"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2 (Note - Previous calculation x2)"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3 (Note - Previous calculation x3)"
              />
            </RadioGroup>
          </FormControl>
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
