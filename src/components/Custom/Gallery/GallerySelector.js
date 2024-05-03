import { useState, useEffect } from "react";

// Custom components
import Gallery from "components/Custom/Gallery/Gallery";
import GalleryMobile from "components/Custom/Gallery/GalleryMobile";

//Theme components
import breakpoints from "assets/theme/base/breakpoints";

function GallerySelector() {
  const [mobileGallery, setMobileGallery] = useState(false);
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
