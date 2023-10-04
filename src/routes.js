/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// Service Pages
import TwoD from "layouts/pages/service-pages/2D";
import ThreeD from "layouts/pages/service-pages/3D";
import Brand from "layouts/pages/service-pages/brand";
import Creative from "layouts/pages/service-pages/creative";
import Events from "layouts/pages/service-pages/events";
import Headshots from "layouts/pages/service-pages/headshots";
import PhotoEvents from "layouts/pages/service-pages/photo-events";
import Podcasts from "layouts/pages/service-pages/podcast";
import Product from "layouts/pages/service-pages/product";
import TalkingHeads from "layouts/pages/service-pages/talking-heads";
import Testimonials from "layouts/pages/service-pages/testimonials";
import VirtualTours from "layouts/pages/service-pages/virtual-tours";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import OurMission from "layouts/pages/landing-pages/ourmission";

const routes = [
  {
    name: "creative",
    route: "/creative",
    component: <Creative/>,
  },
  
  {
    name: "branded",
        collapse: [
          {
            name: "brand videos",
            route: "/brand",
            component: <Brand />,
            protected: false,
          },
          {
            name: "talking heads",
            route: "/talking-heads",
            component: <TalkingHeads />,
            protected: false,
          },
          // {
          //   name: "testimonial videos",
          //   route: "/testimonials",
          //   component: <Testimonials />,
          //   protected: false,
          // },
          {
            name: "product videos",
            route: "/product",
            component: <Product />,
            protected: false,
          },
          {
            name: "virtual tours",
            route: "/virtual-tours",
            component: <VirtualTours />,
            protected: false,
          },
          {
            name: "podcast videos",
            route: "/podcast",
            component: <Podcasts />,
            protected: false,
          },
        ],
      },
      {
        name: "events",
        route: "/events",
        component: <Events/>,
      },
      {
        name: "animation",
            collapse: [
              {
                name: "2D",
                route: "/animation/2D",
                component: <TwoD />,
                protected: false,
              },
              {
                name: "3D",
                route: "/animation/3D",
                component: <ThreeD />,
                protected: false,
              },
            ],
          },
          {
            name: "photography",
                collapse: [
                  {
                    name: "event photography",
                    route: "/photography/events",
                    component: <PhotoEvents />,
                    protected: false,
                  },
                  {
                    name: "headshot photography",
                    route: "/photography/headshots",
                    component: <Headshots />,
                    protected: false,
                  },
                ],
              },
              {
                name: "our mission",
                route: "/our-mission",
                component: <OurMission />,
              },
];

export default routes;
