import {useEffect, useState } from "react";
import YouTube from 'react-youtube';


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Custom components
import ThumbnailCard from "components/Custom/ThumbnailCard";

// Data
import data from "pages/ServicePages/Product/sections/data/designBlocksData";

import breakpoints from "assets/theme/base/breakpoints";

function DesignBlocks() {
  const [opts, setOpts] = useState({
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }});
    useEffect(() => {
      // A function that sets the display state for the DefaultNavbarMobile.
      function displayMobilePopup() {
        if (window.innerWidth < breakpoints.values.md) {
          setOpts({
            height: '300',
            width: '400',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            }});
        } else {
          console.log("NOT MOBILE")
        }
      }
  
      /** 
       The event listener that's calling the displayMobileGallery function when 
       resizing the window.
      */
      window.addEventListener("resize", displayMobilePopup);
  
      // Call the displayMobileNavbar function to set the state with the initial value.
      displayMobilePopup();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", displayMobilePopup);
    }, []);
  const [openModalId, setOpenModalId] = useState(null);

  const toggleModal = (videoId) => {
    if (openModalId === videoId) {
      // If the clicked modal is already open, close it.
      setOpenModalId(null);
    } else {
      // Otherwise, open the clicked modal.
      setOpenModalId(videoId);
    }
  };

  const renderData = data.map(({ key, items }) => (
    <Grid container spacing={3} sx={{ mb: 25 }} key={key}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
        {items.map(({ image, name, videoId }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={`${name}-${videoId}`}>
                <ThumbnailCard image={image} name={name} sx={{ cursor: "pointer" }} onClick={() => toggleModal(videoId)} />
              <Modal open={openModalId === videoId} onClose={() => toggleModal(videoId)} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={openModalId === videoId} timeout={500}>
            <MKBox
              position="relative"
              width={opts.width}
              height={opts.height}
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="#212529"
              shadow="xl"
            >
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">{name}</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId={videoId} opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={-20} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          {/* <MKBadge
            variant="contained"
            color="primary"
            badgeContent="Our Work"
            container
            sx={{ mb: 2 }}
            size="lg"
          /> */}
          {/* <MKTypography variant="h2" fontWeight="bold">
            Thumbnails
          </MKTypography>
          <MKTypography variant="body1" color="text">
            This is the layout for Thumbnails
          </MKTypography> */}
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
