/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import 'assets/css/gallery-main.css'
function Gallery() {
  return (
    <>
    <section
      id="portfolio"
      className="section fp-section fp-table active"
    >
      <Grid >
      {/* Portfolio items */}
      <Grid item
        className="portfolio-item dark"
      >
        <div className="portfolio-meta">
          <a href="#" className="portfolio-like">
            <i className="ion-ios-heart-outline"></i>
          </a>
          <time dateTime="15.02.2017">15.02.2017</time>
          <a href="project-details-1.html" className="portfolio-item-more">
            <i className="ion-ios-arrow-right"></i>
          </a>
        </div>
        <header className="portfolio-header">
          <a href="project-details-1.html">
            <div className="portfolio-item-title">
              <div className="meta-categories">APP, WEBSITE</div>
              <h3>HILLTOP</h3>
            </div>
            <figure className="portfolio-img">
              <img
                src="http://wythe.artstudioworks.net/site-template/images/project-img1.jpg"
                alt="portfolio item 1"
                className="featured-image"
              />
            </figure>
          </a>
        </header>
      </Grid>
      <Grid item className="portfolio-item width-2x">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-2.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-2.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">BRANDING</div>
    <h3>WORLD CLASS</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img2.jpg" alt="portfolio item 2" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-3.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-3.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">LOGO</div>
    <h3>MOTTESTATE</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img3.jpg" alt="portfolio item 3" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-5.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-5.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">CONCEPT</div>
    <h3>INSTRUMENT</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img4.jpg" alt="portfolio item 4" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item className="portfolio-item">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-6.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-6.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">LOGO</div>
    <h3>SOUND</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img5.jpg" alt="portfolio item 5" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-7.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-7.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">WEBSITE</div>
    <h3>ALLASIO</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img6.jpg" alt="portfolio item 6" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* <Grid item className="portfolio-item width-2x dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-8.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-8.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">PHOTOGRAPHY</div>
    <h3>ALIKE MORE</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img6.jpg" alt="portfolio item 7" className="featured-image" />
  </figure>
</a>
</header>
</Grid> */}
<Grid item className="portfolio-item width-2x dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time dateTime="15.02.2017">15.02.2017</time>
<a href="project-details-8.html" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="project-details-8.html">
  <div className="portfolio-item-title">
    <div className="meta-categories">PHOTOGRAPHY</div>
    <h3>ALIKE MORE</h3>
  </div>
  <figure className="portfolio-img">
    <img src="http://wythe.artstudioworks.net/site-template/images/project-img9.jpg" alt="portfolio item 7" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
      <Grid
        item
        className="portfolio-item portfolio-more-items"
      >
        <a href="#" className="load-more active">
          <span>MORE</span>
        </a>
      </Grid>
      </Grid>
    </section>
</>
  );
}

export default Gallery;
