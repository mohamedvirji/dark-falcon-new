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

import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import 'assets/css/gallery-main.css'

import Gallery from "components/Custom/Gallery/Gallery";
import GalleryMobile from "components/Custom/Gallery/GalleryMobile";
import breakpoints from "assets/theme/base/breakpoints";

function GallerySelector() {
  const [mobileGallery, setMobileGallery] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
      // A function that sets the display state for the DefaultNavbarMobile.
      function displayMobileGallery() {
        if (window.innerWidth < breakpoints.values.md) {
          setMobileGallery(true);
        } else {
          setMobileGallery(false);
        }
      }
  
      /** 
       The event listener that's calling the displayMobileGallery function when 
       resizing the window.
      */
      window.addEventListener("resize", displayMobileGallery);
  
      // Call the displayMobileNavbar function to set the state with the initial value.
      displayMobileGallery();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", displayMobileGallery);
    }, []);
  return (
    <div>
      { mobileGallery ? ( 
   <div>
       <GalleryMobile/>
   </div>) :
   
   (<div>
       <Gallery/>
   </div>)
      }
   </div>
)
}

export default GallerySelector;
