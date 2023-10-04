
// @mui material components
import Grid from "@mui/material/Grid";
import { dark } from "@mui/material/styles/createPalette";

function GalleryMobile() {
  const imagesPrefix =
  "https://d17kgkt7t2bpo9.cloudfront.net/gallery";
  return (
    <>
        <section
          id="portfolio"
          className="section fp-section fp-table active"
        >
          <Grid container>
          {/* Portfolio items */}
          <Grid item xs={12} md={2}
            className="portfolio-item"
          >
             <div className="portfolio-meta">
          <a href="#" className="portfolio-like">
            <i className="ion-ios-heart-outline"></i>
          </a>
          <time>CREATIVE</time>
          <a href="/creative" className="portfolio-item-more">
            <i className="ion-ios-arrow-right"></i>
          </a>
        </div>
        <header className="portfolio-header">
          <a href="/creative">
            <figure className="portfolio-img">
              <img
                src={`${imagesPrefix}/1.png`}
                alt="portfolio item 1"
                className="featured-image"
              />
            </figure>
          </a>
        </header>
          </Grid>
          <Grid item xs={12} md={4} className="portfolio-item width-2x" >
          <div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>EVENTS</time>
<a href="/events" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/events">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/2.png`} alt="portfolio item 2" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={3} className="portfolio-item dark" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>BRAND VIDEOS</time>
<a href="/brand" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/brand">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/3.png`} alt="portfolio item 3" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={3} className="portfolio-item dark" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>TALKING HEADS</time>
<a href="/talking-heads" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/talking-heads">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/9.png`} alt="portfolio item 4" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={3} className="portfolio-item" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>PODCAST</time>
<a href="/podcast" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/podcast">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/5-1.png`} alt="portfolio item 5" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={3} className="portfolio-item dark" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>2D ANIMATION</time>
<a href="/animation/2D" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/animation/2D">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/6.png`} alt="portfolio item 6" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={4} className="portfolio-item width-2x dark" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>EVENTS</time>
<a href="/events" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/events">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/7.png`} alt="portfolio item 7" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
<Grid item xs={12} md={4} className="portfolio-item width-2x dark" >
<div className="portfolio-meta">
<a href="#" className="portfolio-like"><i className="ion-ios-heart-outline"></i></a>
<time>3D ANIMATION</time>
<a href="/animation/3D" className="portfolio-item-more"><i className="ion-ios-arrow-right"></i></a>
</div>
<header className="portfolio-header">
<a href="/animation/3D">
  <figure className="portfolio-img">
    <img src={`${imagesPrefix}/8.png`} alt="portfolio item 6" className="featured-image" />
  </figure>
</a>
</header>
</Grid>
          {/* <Grid
            item
            className="portfolio-item portfolio-more-items"
            xs={12}
            md={2}
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

export default GalleryMobile;
