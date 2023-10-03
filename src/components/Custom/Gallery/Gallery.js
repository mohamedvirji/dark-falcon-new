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
      <Grid>
      {/* Portfolio items */}
      {/* item 1 */}
      <Grid item
        className="portfolio-item"
      >
        <div className="portfolio-meta">
          <a href="#" className="portfolio-like">
            <i className="ion-ios-heart-outline"></i>
          </a>
          <time>Pearl Yacht 72</time>
          <a href="/creative" className="portfolio-item-more">
            <i className="ion-ios-arrow-right"></i>
          </a>
        </div>
        <header className="portfolio-header">
          <a href="/creative">
            <div className="portfolio-item-title">
              {/* <div className="meta-categories">APP, WEBSITE</div> */}
              <h3>CREATIVE</h3>
            </div>
            <figure className="portfolio-img">
              <img
                src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/1.png"
                alt="portfolio item 1"
                className="featured-image"
              />
            </figure>
          </a>
        </header>
      </Grid>
      {/* item 2 */}
      <Grid item className="portfolio-item width-2x">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>BIMA</time>
<a href="/events" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/events">
  <div className="portfolio-item-title">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div className="meta-categories">Events</div> */}
    <h3>EVENTS</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/2.png" alt="portfolio item 2" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 3 */}
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>TotalEnergies</time>
<a href="/brand" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/brand">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">LOGO</div> */}
    <h3>BRAND VIDEOS</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/3.png" alt="portfolio item 3" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 4 */}
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>TotalEnergies</time>
<a href="/talking-heads" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/talking-heads">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">CONCEPT</div> */}
    <h3>TALKING HEADS</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/4.png" alt="portfolio item 4" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 5 */}
<Grid item className="portfolio-item">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>LBPC</time>
<a href="/podcast" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/podcast">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">LOGO</div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <h3>PODCAST</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/5-1.png" alt="portfolio item 5" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 6 */}
<Grid item className="portfolio-item dark">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>The Change Foundation</time>
<a href="/animation/2D" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/animation/2D">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">WEBSITE</div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3>2D Animation</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/6.png" alt="portfolio item 6" className="featured-image" />
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
{/* item 7 */}
<Grid item className="portfolio-item width-2x">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>Cosun Beet</time>
<a href="/events" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/events">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">PHOTOGRAPHY</div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3>EVENTS</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/7.png" alt="portfolio item 7" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 8 */}
<Grid item className="portfolio-item">
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>3D Pearl Yachts</time>
<a href="/animation/3D" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/animation/3D">
  <div className="portfolio-item-title">
    {/* <div className="meta-categories">WEBSITE</div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3>3D Animation</h3>
  </div>
  <figure className="portfolio-img">
    <img src="https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/gallery/8.png" alt="portfolio item 6" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
{/* item 8 */}
      {/* <Grid
        item
        className="portfolio-item portfolio-more-items"
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
