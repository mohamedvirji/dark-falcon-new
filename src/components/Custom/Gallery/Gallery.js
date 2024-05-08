import { useState } from "react";
import YouTube from 'react-youtube';
// @mui material components
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";

// Template components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Gallery() {
  const [showOne, setShowOne] = useState(false);
  const toggleModalOne = () => setShowOne(!showOne);

  const [showTwo, setShowTwo] = useState(false);
  const toggleModalTwo= () => setShowTwo(!showTwo);

  const [showThree, setShowThree] = useState(false);
  const toggleModalThree = () => setShowThree(!showThree);

  const [showFour, setShowFour] = useState(false);
  const toggleModalFour = () => setShowFour(!showFour);

  const [showFive, setShowFive] = useState(false);
  const toggleModalFive = () => setShowFive(!showFive);

  const [showSix, setShowSix] = useState(false);
  const toggleModalSix = () => setShowSix(!showSix);

  const [showSeven, setShowSeven] = useState(false);
  const toggleModalSeven = () => setShowSeven(!showSeven);

  const [showEight, setShowEight] = useState(false);
  const toggleModalEight = () => setShowEight(!showEight);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}

  const imagesPrefix =
  "https://d2u61031vokrmr.cloudfront.net/webp/gallery";
  
  return (
    <>
    <section
      id="portfolio"
      className="section fp-section fp-table active"
    >
      <Grid>
      {/* Portfolio items */}
      {/* item 1 */}
      <Grid item
        className="portfolio-item"
        sx={{ cursor: "pointer" }}
        onClick={toggleModalOne}
      >
        <div className="portfolio-meta">
          <time>CREATIVE</time>
        </div>
        <header className="portfolio-header">
            <figure className="portfolio-img">
              <img
                src={`${imagesPrefix}/1.webp`}
                alt="portfolio item 1"
                className="featured-image"
              />
            </figure>
        </header>
      </Grid>
      <Modal open={showOne} onClose={toggleModalOne} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showOne} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Pearl Yacht 72</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalOne} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="VgkZJDTQL8s" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
      {/* item 2 */}
      <Grid item className="portfolio-item width-2x" sx={{ cursor: "pointer" }} onClick={toggleModalTwo} >
<div className="portfolio-meta">
<time>EVENTS</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/2.webp`} alt="portfolio item 2" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showTwo} onClose={toggleModalTwo} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showTwo} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">BIMA</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalTwo} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="QQoLefOqDoQ" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 3 */}
<Grid item className="portfolio-item dark" sx={{ cursor: "pointer" }} onClick={toggleModalThree} >
<div className="portfolio-meta">
<time>BRAND VIDEOS</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/3.webp`} alt="portfolio item 3" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showThree} onClose={toggleModalThree} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showThree} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">TotalEnergies</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalThree} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="egU-X3ha7Q8" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 4 */}
<Grid item className="portfolio-item dark" sx={{ cursor: "pointer" }} onClick={toggleModalFour} >
<div className="portfolio-meta">
<time>CREATIVE</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/9.webp`} alt="portfolio item 4" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showFour} onClose={toggleModalFour} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showFour} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">NJOY</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalFour} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="ptJifXxau_s" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 5 */}
<Grid item className="portfolio-item" sx={{ cursor: "pointer" }} onClick={toggleModalFive}>
<div className="portfolio-meta">
<time>PODCAST</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/5-1.webp`} alt="portfolio item 5" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showFive} onClose={toggleModalFive} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showFive} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">LBPC</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalFive} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="tnFy7ns2HY8" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 6 */}
<Grid item className="portfolio-item dark" sx={{ cursor: "pointer" }} onClick={toggleModalSix} >
<div className="portfolio-meta">
<time>2D ANIMATION</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/6.webp`} alt="portfolio item 6" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showSix} onClose={toggleModalSix} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showSix} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">The Change Foundation</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalSix} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="aX1pX7kQdqM" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 7 */}
<Grid item className="portfolio-item width-2x" sx={{ cursor: "pointer" }} onClick={toggleModalSeven} >
<div className="portfolio-meta">
<time>EVENTS</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/7.webp`} alt="portfolio item 7" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showSeven} onClose={toggleModalSeven} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showSeven} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Cosun Beet</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalSeven} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="peRrOxSpmCY" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 8 */}
<Grid item className="portfolio-item" sx={{ cursor: "pointer" }} onClick={toggleModalEight} >
<div className="portfolio-meta">
<time>3D ANIMATION</time>
</div>
<header className="portfolio-header">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/8.webp`} alt="portfolio item 6" className="featured-image" />
  </figure>
</header>
</Grid>
<Modal open={showEight} onClose={toggleModalEight} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={showEight} timeout={500}>
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
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">3D Pearl Yachts</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer", color:"#EC407A" }} onClick={toggleModalEight} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <YouTube videoId="KmIWUySR2k0" opts={opts} />
              <Divider sx={{ my: 0 }} />
            </MKBox>
          </Slide>
        </Modal>
{/* item 8 */}
      {/* <Grid
        item
        className="portfolio-item portfolio-more-items"
        sx={{ cursor: "pointer" }} 
      >
        <a href="#" className="load-more active">
          <span>MORE</span>
        </a>
      </Grid> */}
      </Grid>
    </section>
</>
  );
}

export default Gallery;
