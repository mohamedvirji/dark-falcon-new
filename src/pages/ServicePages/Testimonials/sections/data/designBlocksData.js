const imagesPrefix =
  "https://d2u61031vokrmr.cloudfront.net/webp/thumbnails/testimonials";

  import placeholder from "assets/images/placeholder-thumb.webp";

export default [
  {
    title: "Testimonials",
    key: 11,
    description: "Testimonial Thumbnails",
    items: [
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT+-+log+me+in-01.webp`,
        name: "Logmein",
        
        route: "https://youtu.be/eZysL94gZZQ",
      },
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT+-PROFITERO-01.webp`,
        name: "Profitero 2023",
        
        route: "https://youtu.be/j8RYbbxhT7c",
      },
      {
        image: `${imagesPrefix}/dfp-thumbnails_+CT-+Bold+360-01.webp`,
        name: "Bold 360",
        
        route: "https://youtu.be/afQp8ZM3PW8",
      },
      {
        image: `${placeholder}`,
        name: "Nina Bainbridge",
        
        route: "#",
      },
      {
        image: `${placeholder}`,
        name: "Michelle Total Energies",
        
        route: "#",
      },
    ],
  },
];
