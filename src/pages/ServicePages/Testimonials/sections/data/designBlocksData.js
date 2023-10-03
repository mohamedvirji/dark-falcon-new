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

const imagesPrefix =
  "https://darkfalcon-assets.s3.eu-west-2.amazonaws.com/thumbnails/testimonials";

  import placeholder from "assets/images/placeholder-thumb.jpg?format=webp";

export default [
  {
    title: "Design Blocks",
    description: "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT+-+log+me+in-01.jpg?format=webp`,
        name: "Logmein",
        count: "",
        route: "https://youtu.be/eZysL94gZZQ",
      },
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT+-PROFITERO-01.jpg?format=webp`,
        name: "Profitero 2023",
        count: "",
        route: "https://youtu.be/j8RYbbxhT7c",
      },
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT-+Bold+360-01.jpg?format=webp`,
        name: "Bold 360",
        count: "",
        route: "https://youtu.be/afQp8ZM3PW8",
      },
      {
        image: `${placeholder}`,
        name: "Nina Bainbridge",
        count: "",
        route: "#",
      },
      {
        image: `${placeholder}`,
        name: "Michelle Total Energies",
        count: "",
        route: "#",
      },
    ],
  },
];
