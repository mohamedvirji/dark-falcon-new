/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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


import Team from "layouts/pages/landing-pages/team";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import AboutUs from "layouts/pages/landing-pages/about-us";

// import Author from "layouts/pages/landing-pages/author";
// import GalleryPage from "layouts/pages/gallery";
// import Presentation from "layouts/pages/presentation";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

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
          {
            name: "testimonial videos",
            route: "/testimonials",
            component: <Testimonials />,
            protected: false,
          },
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
                    name: "events",
                    route: "/photography/events",
                    component: <PhotoEvents />,
                    protected: false,
                  },
                  {
                    name: "headshots",
                    route: "/photography/headshots",
                    component: <Headshots />,
                    protected: false,
                  },
                ],
              },
              {
                name: "",
                route: "/contact",
                component: <ContactUs/>,
              },
              {
                name: "our mission",
                route: "/about",
                component: <AboutUs/>,
              },
      
          
              
                  // {
                  //   name: "",
                  //   route: "/contact",
                  //   component: <ContactUs/>,
                  // },
  //     // {
  //     //   name: "account",
  //     //   collapse: [
  //     //     {
  //     //       name: "sign in",
  //     //       route: "/pages/authentication/sign-in",
  //     //       component: <SignIn />,
  //     //     },
  //     //     {
  //     //       name: "sign up",
  //     //       route: "/pages/authentication/sign-up",
  //     //       component: <SignUp />,
  //     //     },
  //     //     {
  //     //       name: "sign out",
  //     //       route: "/pages/authentication/sign-out",
  //     //       component: <SignOutPage />,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   name: "sections",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //           protected: true,
  //         },
  //         {
  //           name: "features",
  //           route: "/sections/page-sections/features",
  //           component: <Features />,
  //           protected: true,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //           protected: true,
  //         },
  //         {
  //           name: "nav tabs",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //           protected: true,
  //         },
  //         {
  //           name: "pagination",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //           protected: true,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //           protected: true,
  //         },
  //         {
  //           name: "forms",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //           protected: true,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           route: "/sections/attention-catchers/alerts",
  //           component: <Alerts />,
  //           protected: true,
  //         },
  //         {
  //           name: "modals",
  //           route: "/sections/attention-catchers/modals",
  //           component: <Modals />,
  //           protected: true,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           route: "/sections/attention-catchers/tooltips-popovers",
  //           component: <TooltipsPopovers />,
  //           protected: true,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //           protected: true,
  //         },
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //           protected: true,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           route: "/sections/elements/breadcrumbs",
  //           component: <BreadcrumbsEl />,
  //           protected: true,
  //         },
  //         {
  //           name: "buttons",
  //           route: "/sections/elements/buttons",
  //           component: <Buttons />,
  //           protected: true,
  //         },
  //         {
  //           name: "dropdowns",
  //           route: "/sections/elements/dropdowns",
  //           component: <Dropdowns />,
  //           protected: true,
  //         },
  //         {
  //           name: "progress bars",
  //           route: "/sections/elements/progress-bars",
  //           component: <ProgressBars />,
  //           protected: true,
  //         },
  //         {
  //           name: "toggles",
  //           route: "/sections/elements/toggles",
  //           component: <Toggles />,
  //           protected: true,
  //         },
  //         {
  //           name: "typography",
  //           route: "/sections/elements/typography",
  //           component: <Typography />,
  //           protected: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "Support",
  //       description: "Get LIVE assistance from experts",
  //       href: "https://appseed.us/support/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/?AFFILIATE=128200",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/?AFFILIATE=128200",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/?AFFILIATE=128200",
  //     },
  //   ],
  // },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://github.com/app-generator/react-material-kit",
  // },
];

export default routes;
