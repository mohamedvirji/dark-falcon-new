import { useState } from "react";
import YouTube from 'react-youtube';

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";

// Template components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Custom components
import ThumbnailCard from "components/Custom/ThumbnailCard";

// Data
import data from "pages/ServicePages/2D/sections/data/designBlocksData";

function DesignBlocks() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
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

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 25 }} key={title}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro, videoId }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
                <ThumbnailCard image={image} name={name} count={count} pro={pro} sx={{ cursor: "pointer" }} onClick={() => toggleModal(videoId)} />
              <Modal open={openModalId === videoId} onClose={() => toggleModal(videoId)} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={openModalId === videoId} timeout={500}>
            <MKBox
              position="relative"
              width="640px"
              height="475px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="#212529"
              shadow="xl"
            >
              <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
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
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
