module.exports = {
  siteMetadata: {
    title: `Nick Lewis`,
    description: `Frontend web developer, designer, writer and photographer, based in Farnborough, Hampshire. Specializing in Javascript, React, and Gatsby. Say hello and let's build something amazing together!`,
    keywords: [
      `web developer`,
      `Photographer`,
      `web design`,
      `Farnborough`,
      `Gatsby`,
      `websites`,
      `react`,
      `javascript`,
      `front end`,
      `frontend`,
      `frontend web developer`,
      `GatsbyJS`,
      `Sanity`,
      `Sanity.io`,
    ],
    author: `Nick Lewis`,
    siteUrl: `https://nicklewis.photo`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Blog`,
        link: `/blog`,
        type: `internal`, //internal or anchor
      },
      // {
      //   name: `Galleries`,
      //   link: `/galleries`,
      //   type: `internal`, //internal or anchor
      // },
      // {
      //   name: `Me`,
      //   link: `#me`,
      //   type: `anchor`,
      // },
      {
        name: `Work`,
        link: `#work`,
        type: `anchor`,
      },
      {
        name: `Contact`,
        link: `#contact`,
        type: `anchor`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://instagram.com/nicklewisphotography`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/nicklewis`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-helium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        footerContentLocation: "right",
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 200,
        // Helium
        useHero: true,
        assetPath: `content/site-assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
